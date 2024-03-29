import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Tag from './Tag';
import {
  TagListStyles,
  TagWrapperStyles,
} from '../../../styles/Modules/TagStyles';

export default function AllArticleTags({ activeTag, fontSize }) {
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
  // blog
  const allTags =
    articles &&
    articles.nodes
      .map((article) => article.tags)
      .flat()
      .reduce((acc, tag) => {
        const existingTag = acc[tag.id];
        if (existingTag) {
          existingTag.count += 1;
        } else {
          acc[tag.id] = {
            name: tag.name,
            id: tag.id,
            count: 1,
          };
        }
        return acc;
      }, {});
  const sortedTags = Object.values(allTags).sort((a, b) => b.count - a.count);
  console.log(articles, sortedTags);

  return (
    <TagWrapperStyles>
      <TagListStyles>
        <Link to="/blog" className={fontSize}>
          All ({sortedTags.length})
        </Link>
      </TagListStyles>
      {sortedTags.map((tag) => (
        <Tag key={tag.id} name={tag.name} count={tag.count} />
      ))}
    </TagWrapperStyles>
  );
}
