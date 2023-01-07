import styled from 'styled-components';
import { PxToRem } from '../utils/math';

export const TagListStyles = styled.li`
  padding: 5px 10px;
  border: solid 2px #441c2c;
  color: #441c2c;
  border-radius: 4px;
  margin-top: 5px;
  margin-right: ${PxToRem(15)};
  cursor: pointer;
  &:hover {
    color: var(--highlight-red);
    border: solid 2px var(--highlight-red);
  }
`;

export const TagWrapperStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export default TagListStyles;
