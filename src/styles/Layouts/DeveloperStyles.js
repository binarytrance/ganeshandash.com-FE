import styled from 'styled-components';
import { PxToRem } from '../utils/math';
import { theme, typeScale } from '../utils';

export const DeveloperStyles = styled.div`
  .greeting {
    grid-column: 1/-1;
    grid-row: 2/3;
    &__namaste {
      font-family: 'Yatra';
      ${typeScale.header3};
    }
    &__me {
      ${typeScale.myName};
      margin-bottom: ${PxToRem(25)};
    }
    &__hats {
      ${typeScale.textMd};
    }
  }
  .past-work {
    li {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: 1fr 1fr 1fr 1fr;
      margin-bottom: ${PxToRem(30)};
      &:last-child {
        margin-bottom: 0;
      }
      img {
        width: 100%;
        grid-row: 1/-2;
        grid-auto-rows: auto;
        height: 300px;
      }
      .past-work__details {
        grid-row: 3/-1;
        background: white;
      }
      &:nth-child(odd) {
        img {
          grid-column: 1/7;
        }
        .past-work__details {
          grid-column: 5/-1;
        }
      }
      &:nth-child(even) {
        img {
          grid-column: 3/-1;
        }
        .past-work__details {
          grid-column: 1/5;
        }
      }
    }
  }
  h2 {
    margin-bottom: ${PxToRem(25)};
  }
`;
