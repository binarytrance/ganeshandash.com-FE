import { graphql } from 'gatsby';
import React from 'react';
import ArticleContent from '../components/ArticleContent';

const Article = ({ data, errors }) => {
  // console.log(data.article.title, errors);
  const content = data && data.article;
  // console.log(content);

  // handle graphql errors
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <>{content && <ArticleContent {...content} />}</>;
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
