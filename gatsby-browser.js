// allows us to hook into different apis of gatsby if we need to
// only runs in the browser after the page has been generated in the browser
// allows a plugin to wrap the page element - everytime gatsby renders out a page, it will wrap that with, in this case Layout component
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
