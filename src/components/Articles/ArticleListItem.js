import React from 'react';
import { differenceInDays, format, formatDistance } from 'date-fns';
import { Link } from 'gatsby';
import Tag from './Tags/Tag';
import { TagWrapperStyles } from '../../styles/Modules/TagStyles';

const ArticleListItem = ({ article }) => (
  <li key={article.id} className="article">
    {article.publishedAt && (
      <time className="article-date" dateTime={new Date(article.publishedAt)}>
        {differenceInDays(new Date(article.publishedAt), new Date()) > 3
          ? formatDistance(new Date(article.publishedAt), new Date())
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
      <TagWrapperStyles>
        {article.tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </TagWrapperStyles>
    ) : null}
  </li>
);

ArticleListItem.propTypes = {};

export default ArticleListItem;
