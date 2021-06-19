import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function ArticleTags({ activeTag }) {
  // get all tags
  const { articles } = useStaticQuery(graphql`
    query {
      articles: allSanityWriter {
        nodes {
          tags {
            name
            id
            tech
          }
          id
          title
        }
      }
    }
  `);
  // get number of articles wrt to each tag
  // list down all the article tags along with their article numbers
  console.clear();
  console.log(articles);
  // blog
  const allTags =
    articles &&
    articles.nodes
      .map((article) => article.tags)
      .flat()
      .reduce((acc, tag) => {
        console.log(acc, tag);

        const existingTag = acc[tag.id];
        if (existingTag) {
          existingTag.count += 1;
        } else {
          console.log('else');

          acc[tag.id] = {
            name: tag.name,
            id: tag.id,
            count: 1,
          };
        }
        return acc;
      }, {});
  console.log(allTags);
  const sortedTags = Object.values(allTags).sort((a, b) => b.count - a.count);

  return (
    <ul>
      <Link to="/writer">All ({sortedTags.length})</Link>
      {sortedTags.map((tag) => (
        <Link to={`/tag/${tag.name}`}>
          {tag.name}({tag.count})
        </Link>
      ))}
    </ul>
  );
}
