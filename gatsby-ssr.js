// gatsby generated pages on the server. this file runs on the server
import React from 'react';
import Layout from './src/components/Layout';
import { GlobalStyles } from './src/styles/global';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}