const { default: styled } = require('styled-components');
const { typeScale } = require('../utils');
const { baseTheme } = require('../utils');
const { PxToRem } = require('../utils/math');

export const ArticlesListStyles = styled.ul`
  /* margin-top: ${PxToRem(85)}; */
  .article {
    display: flex;
    flex-direction: column;
    /* padding: ${PxToRem(12)}; */
    margin-bottom: ${PxToRem(25)};
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      color: ${baseTheme.text};
    }
    &__summary {
      ${typeScale.textSm};
    }
  }
  .article-date {
    ${typeScale.textXs}
  }
`;
