import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { TagListStyles } from '../../../styles/Modules/TagStyles';

export default function Tag({ count, name }) {
  return (
    <TagListStyles>
      <Link to={`/tag/${name}`}>
        {name}
        {count ? `(${count})` : null}
      </Link>
    </TagListStyles>
  );
}
