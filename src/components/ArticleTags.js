import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function ArticleTags({ articles }) {
  // get number of articles wrt to each tag
  // list down all the article tags along with their article numbers
  console.clear();
  console.log(articles);
  // blog
  const allTags =
    articles &&
    articles
      .map((article) => article.tags)
      .flat()
      .reduce((acc, tag) => {
        console.log(acc, tag);

        const existingTag = acc[tag];
        if (existingTag) {
          existingTag.count += 1;
        } else {
          console.log('else');

          acc[tag] = {
            name: tag,
            count: 1,
          };
        }
        return acc;
      }, {});
  console.log(allTags);
  const sortedTags = Object.values(allTags).sort((a, b) => b.count - a.count);

  return (
    <ul>
      {sortedTags.map((tag) => (
        <Link to={`/articles/${tag.name}`}>
          {tag.name}({tag.count})
        </Link>
      ))}
    </ul>
  );
}
