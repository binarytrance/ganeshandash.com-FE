import { graphql } from 'gatsby';
import React from 'react';

const Article = ({ data }) => {
  console.log(data.article.title);

  return <div>{data.article.title}</div>;
};

export const query = graphql`
  query($slug: String!) {
    article: sanityWriter(slug: { current: { eq: $slug } }) {
      id
      title
      tags {
        id
        name
        tech
      }

      mainImage {
        asset {
          altText
          description
          metadata {
            dimensions {
              aspectRatio
              height
              width
            }
          }
          size
          title
          url
          id
          mimeType
          source {
            url
            name
            id
          }
        }
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
      publishedAt
      summary
    }
  }
`;

export default Article;
