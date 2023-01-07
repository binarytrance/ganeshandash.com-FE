import styled from 'styled-components';
import { baseTheme } from '../utils';
import { PxToRem } from '../utils/math';

export const Island = styled.div`
  /* max-width: ${PxToRem(820)}; */
  /* margin: 40px auto 40px auto; */
  background: #fff;
  border-radius: 50px;
  padding: ${PxToRem(40)} ${PxToRem(80)};
  height: 100%;
`;
