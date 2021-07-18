import { createGlobalStyle } from 'styled-components';
import { baseTheme, typeScale } from '../utils';

import HeadingFont from '../../assets/fonts/Salsa-Regular.ttf';
import YatraFont from '../../assets/fonts/YatraOne-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Salsa;
    src: url(${HeadingFont});
  }
  @font-face {
    font-family: Yatra;
    src: url(${YatraFont});
  }
  html {
    font-family: Salsa, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${baseTheme.text};
    letter-spacing: var(--letter-spacing);
  }
  p, li {
    letter-spacing: var(--letter-spacing);
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  /* a {
    color: var(--black);
    text-decoration-color: var(--red);
    // Chrome renders this weird with this font, so we turn it off
    text-decoration-skip-ink: none;
  } */
  a {
        text-decoration: none;
        text-decoration-skip-ink: none;
        position: relative;
        z-index: var(--z-level-top);
        width: fit-content;
        color: ${baseTheme.text};
        &::before {
            position: absolute;
            content: '';
            height: 8px;
            width: 100%;
            background: var(--egg-white);
            left: 0%;
            bottom: 7px;
            z-index: var(--z-level-psuedo);
        }
        &.text-400 {
          &::before {
            height: 6px;
          }
        }
        &.text-200 {
          &::before {
            height: 4px;
            bottom: 3px;
          }
        }
        &:hover {
          &::before {
            background: var(--highlight-red);
          }
        }

    }

  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }

  .text-700 {
    ${typeScale.header2}
  }
  .text-600 {
      ${typeScale.header2}
  }
  .text-500 {
      ${typeScale.header3}
  }
  .text-400 {
      ${typeScale.textLg}
  }
  .text-300 {
      ${typeScale.textMd}
  }
  .text-200 {
      ${typeScale.textSm}
  }
  .text-100 {
      ${typeScale.textXs}
  }
`;

export default Typography;
