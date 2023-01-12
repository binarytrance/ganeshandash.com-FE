import React from 'react';
import PropTypes from 'prop-types';
import { LayoutStyles } from '../styles/Layouts/layout';
import { GlobalStyles } from '../styles/global';
import Typography from '../styles/Modules/Typography';
import { LintWithCss } from '../styles/Modules/LintWithCss';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <LintWithCss />
    <LayoutStyles>{children}</LayoutStyles>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired, // nothing, string, single element, several elements, fragment, component.
};

export default Layout;
