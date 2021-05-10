import { graphql } from 'gatsby';
import * as React from 'react';

export default function Writer(props) {
  console.log(props);

  return <p>Woah, This is the writer page!</p>;
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
