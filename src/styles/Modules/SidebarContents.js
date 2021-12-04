import styled from 'styled-components';
import { theme, typeScale } from '../utils';
import { baseTheme } from '../utils/themes';
import { PxToRem } from '../utils/math';

export const SidebarContents = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: ${PxToRem(54)};
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: ${PxToRem(3)};
    height: 100%;
    background: #222e50;
  }
  ul {
    display: flex;
    flex-direction: column;
    position: relative;
    background: ${baseTheme.siteBackground};
    padding: ${PxToRem(15)};
    li {
      margin-bottom: ${PxToRem(15)};
      a {
        color: ${baseTheme.text};
      }
    }
  }
`;
