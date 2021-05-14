import { graphql } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
import ArticleTags from '../components/ArticleTags';
// import { theme, typeScale } from '../styles/utils';

const WriterStyles = styled.section`
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    align-items: center;
    grid-template-rows: auto;
  }
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr); // mk1
    grid-template-rows: 30px auto auto 30px;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    height: 630px;
    overflow: visible; // content with more height can be visible, yet the poisiton of the centered div remains same
  }
`;

const HeadingTagStyles = styled.div``;

export default function Writer(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const allArticles = props.data.articles.nodes;
  console.log(allArticles);
  // eslint-disable-next-line react/destructuring-assignment
  const { pathname } = props.location;
  return (
    <WriterStyles>
      <div className="content-wrapper">
        <h1>
          Ganeshan Dash <span>{pathname}</span>
        </h1>
        <HeadingTagStyles>
          <ArticleTags articles={allArticles} />
        </HeadingTagStyles>
        <ul>
          {allArticles.map((article) => (
            <li key={article.id} className="article">
              <h2 className="article__title">{article.title}</h2>
              <p className="article__summary">{article.summary}</p>
              {article.tags.length ? (
                <ul>
                  {article.tags.map((tag) => (
                    <li className="article__tag">{tag}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </WriterStyles>
  );
}

export const pageQuery = graphql`
  query Writer {
    articles: allSanityWriter {
      nodes {
        id
        tags
        title
        summary
        internal {
          content
          contentDigest
          description
        }
        content {
          children {
            text
            _key
          }
          style
          _key
        }
      }
    }
  }
`;
