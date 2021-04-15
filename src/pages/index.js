import * as React from 'react';

import styled from 'styled-components';
import { theme, typeScale } from '../styles/utils';

const HomePageStyles = styled.section`
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    align-items: center;
  }
  .greeting {
    &__namaste {
      font-family: 'Yatra';
      ${typeScale.header2};
    }
    &__me {
      ${typeScale.header1};
    }
    &__hats {
      ${typeScale.textLg};
    }
  }
`;

// markup
const HomePage = () => (
  <HomePageStyles>
    <title>Home Page</title>
    <div>
      <h1 className="greeting">
        <small className="greeting__namaste">Namaste</small>
        <br />
        <span className="greeting__me">I'm Ganeshan!</span>
        <br />
        <small className="greeting__hats">And I put many hats.</small>
        <br />
      </h1>
    </div>
    <div />
    <div />
  </HomePageStyles>
);

export default HomePage;
