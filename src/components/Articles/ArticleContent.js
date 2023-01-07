import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles/Modules/Headings';
import { PxToRem } from '../../styles/utils/math';
import PortableText from '../PortableText';

// import { theme, typeScale } from '../../utils';

export const ArticleStyles = styled.article`
  padding-top: 100px;
  h1 {
    margin-bottom: ${PxToRem(25)};
  }
  p {
    margin-bottom: ${PxToRem(25)};
  }
`;

const ArticleContent = ({
  _rawContent,
  id,
  mainImage,
  publishedAt,
  summary,
  tags,
  title,
}) => (
  // console.log(title);
  <ArticleStyles>
    <H1>{title}</H1>
    {_rawContent && <PortableText blocks={_rawContent} />}
  </ArticleStyles>
);
export default ArticleContent;
