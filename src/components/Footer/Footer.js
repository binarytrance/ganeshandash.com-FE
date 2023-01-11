import React from 'react';
import styled from 'styled-components';
import { PxToRem } from '../../styles/utils/math';

const FooterStyles = styled.section`
  background: #f0a8b1;
  transform: translateY(60px);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: ${PxToRem(40)} ${PxToRem(80)};
`;

function Footer() {
  return <FooterStyles>Footer</FooterStyles>;
}

export default Footer;
