import React from 'react';
import { ArticlesListStyles } from '../../styles/Modules/ArticlesListStyles';
import ArticleListItem from './ArticleListItem';

function Articles({ allArticles }) {
  return (
    <ArticlesListStyles>
      {allArticles.map((article) => (
        <ArticleListItem article={article} />
      ))}
    </ArticlesListStyles>
  );
}

export default Articles;
