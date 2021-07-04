import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import clientConfig from '../../client-config';
// import serializers from './serializers';

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    // serializers={serializers}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...clientConfig.sanity}
  />
);

export default PortableText;
