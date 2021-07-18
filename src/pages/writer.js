import { graphql, Link } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
import { differenceInDays, formatDistance, format } from 'date-fns';
import ArticleTags from '../components/ArticleTags';
import { H1 } from '../styles/Modules/Headings';
import { PxToRem } from '../styles/utils/math';
import { baseTheme } from '../styles/utils/themes';

import { theme, typeScale } from '../styles/utils';

const WriterStyles = styled.section`
  @media (min-width: 1200px) {
    /* height: 100vh; */
    display: grid;
    align-items: center;
    grid-template-rows: auto;
    padding-top: 100px;
  }
  /* .content-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr); // mk1
    grid-template-rows: 30px auto auto 30px;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    height: 630px;
    overflow: visible; // content with more height can be visible, yet the poisiton of the centered div remains same
  } */
`;

const ArticlesList = styled.ul`
  margin-top: ${PxToRem(85)};
  .article {
    display: flex;
    flex-direction: column;
    padding: ${PxToRem(12)};
    &__title {
      color: ${baseTheme.text};
    }
    &__summary {
      ${typeScale.textSm};
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
    }
    &__tag {
      padding: 5px 10px;
      border: solid 2px #441c2c;
      color: #441c2c;
      border-radius: 4px;
      margin-top: 5px;
      margin-right: ${PxToRem(15)};
      cursor: pointer;
      &:hover {
        color: var(--highlight-red);
        border: solid 2px var(--highlight-red);
      }
    }
  }
  .article-date {
    ${typeScale.textXs}
  }
`;

const ArticleFiltersSidebarStyles = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: ${PxToRem(54)};
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: ${PxToRem(3)};
    height: 100%;
    background: #222e50;
  }
  ul {
    display: flex;
    flex-direction: column;
    position: relative;
    background: ${baseTheme.siteBackground};
    padding: ${PxToRem(15)};
    li {
      margin-bottom: ${PxToRem(15)};
      a {
        color: ${baseTheme.text};
      }
    }
  }
`;

export default function Writer({ data, pageContext, ...routeData }) {
  // console.log({ data, pageContext, routeData }, routeData.uri);

  // eslint-disable-next-line react/destructuring-assignment
  const allArticles = data.articles.nodes;
  // console.log(allArticles);
  // eslint-disable-next-line react/destructuring-assignment
  const { uri } = routeData;
  // console.log(routeData, 'uu', allArticles);

  return (
    <>
      <ArticleFiltersSidebarStyles>
        <ArticleTags activeTag={pageContext.tag} fontSize="text-200" />
      </ArticleFiltersSidebarStyles>
      <WriterStyles>
        <div className="content-wrapper">
          <H1>
            <Link to="/">Ganeshan Dash</Link>{' '}
            <span className="what-am-i">{uri}</span>
          </H1>
          {/* // TODO: Install tailwind */}
          {/* <ArticleTags activeTag={pageContext.tag} /> */}
          {/* <HeadingTagStyles /> */}
          <ArticlesList>
            {allArticles.map((article) => (
              <li key={article.id} className="article">
                {article.publishedAt && (
                  <time
                    className="article-date"
                    dateTime={new Date(article.publishedAt)}
                  >
                    {differenceInDays(
                      new Date(article.publishedAt),
                      new Date()
                    ) > 3
                      ? formatDistance(
                          new Date(article.publishedAt),
                          new Date()
                        )
                      : format(new Date(article.publishedAt), 'MMMM Mo, yyyy')}
                  </time>
                )}
                <Link
                  to={`/writer/article/${article.slug.current}`}
                  className="text-400 article__title"
                >
                  {article.title}
                </Link>
                <p className="article__summary">{article.summary}</p>
                {article.tags.length ? (
                  <ul className="article__tags">
                    {article.tags.map((tag) => (
                      <li key={tag.id} className="article__tag">
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ArticlesList>
        </div>
      </WriterStyles>
    </>
  );
}

export const pageQuery = graphql`
  query Writer($tagRegex: String) {
    articles: allSanityWriter(
      filter: { tags: { elemMatch: { name: { regex: $tagRegex } } } }
    ) {
      nodes {
        id
        title
        summary
        publishedAt
        slug {
          current
        }
        tags {
          name
          id
        }
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
