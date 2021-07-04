import React from 'react';
import PortableText from './PortableText';

const ArticleContent = ({
  _rawContent,
  id,
  mainImage,
  publishedAt,
  summary,
  tags,
  title,
}) => {
  console.log(title);
  return (
    <article>
      <h1>{title}</h1>
      {_rawContent && <PortableText blocks={_rawContent} />}
    </article>
  );
};

export default ArticleContent;
