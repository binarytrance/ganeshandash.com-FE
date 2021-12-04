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
    &__tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
    }
    &__tag {
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
    }
  }
  .article-date {
    ${typeScale.textXs}
  }
`;
