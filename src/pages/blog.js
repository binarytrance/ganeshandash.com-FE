import { graphql, Link } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
import { SidebarContents } from '../styles/Modules/SidebarContents';
import AllArticleTags from '../components/Articles/Tags/AllArticleTags';
import { H1 } from '../styles/Modules/Headings';
import { Island } from '../styles/Layouts/Island';
import Articles from '../components/Articles';

const BlogStyles = styled.section`
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

export default function Blog({ data, pageContext, ...routeData }) {
  // console.log({ data, pageContext, routeData }, routeData.uri);

  // eslint-disable-next-line react/destructuring-assignment
  const allArticles = data.articles.nodes;
  // console.log(allArticles);
  // eslint-disable-next-line react/destructuring-assignment
  const { uri } = routeData;
  // console.log(routeData, 'uu', allArticles);

  return (
    <Island>
      {/* <SidebarContents>
        <ArticleTags activeTag={pageContext.tag} fontSize="text-200" />
      </SidebarContents> */}
      <BlogStyles>
        <H1>
          <Link to="/">Ganeshan Dash</Link>{' '}
          <span className="what-am-i">{uri}</span>
        </H1>
        {/* // TODO: Install tailwind */}
        <AllArticleTags activeTag={pageContext.tag} />
        <Articles allArticles={allArticles} />
      </BlogStyles>
    </Island>
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
