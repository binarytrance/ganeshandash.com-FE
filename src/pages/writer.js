import { graphql } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
// import { theme, typeScale } from '../styles/utils';

const WriterStyles = styled.section`
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

export default function Writer(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const allArticles = props.data.articles.nodes;
  console.log(props);
  // eslint-disable-next-line react/destructuring-assignment
  const { pathname } = props.location;
  return (
    <WriterStyles>
      <div className="content-wrapper">
        <h1>
          Ganeshan Dash <span>{pathname}</span>
        </h1>
        <ul>
          {allArticles.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
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
