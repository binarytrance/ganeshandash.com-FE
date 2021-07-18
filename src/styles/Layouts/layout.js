import styled from 'styled-components';
import { baseTheme } from '../utils';
import { PxToRem } from '../utils/math';

export const LayoutStyles = styled.main`
  height: 100%;
  min-height: 100vh;
  max-width: ${PxToRem(680)};
  margin: 0 auto;
`;
