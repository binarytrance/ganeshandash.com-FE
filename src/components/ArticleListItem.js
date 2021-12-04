import React from 'react';
import PropTypes from 'prop-types';
import { differenceInDays, format, formatDistance } from 'date-fns';
import { Link } from 'gatsby';

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
      <ul className="article__tags">
        {article.tags.map((tag) => (
          <li key={tag.id} className="article__tag">
            {tag.name}
          </li>
        ))}
      </ul>
    ) : null}
  </li>
);

ArticleListItem.propTypes = {};

export default ArticleListItem;
