import { createGlobalStyle } from 'styled-components';
import { baseTheme, typeScale } from './utils';
import { PxToRem } from './utils/math';
// import { theme, typeScale } from '../../utils';

export const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    :root {
        --black: #000000;
        --white: ${baseTheme.neutral};
        --yellow: #ffc600;
        --red: #FF4949;
        --highlight-red: ${baseTheme.highlightRed};
        --green: #36454F;
        --letter-spacing: 1.2px;
        --egg-white: #EDF2EF;
        --z-level-top: 3;
        --z-level-middle: 2;
        --z-level-bottom: 1;
        --z-level-psuedo: -1;
    }


    h1 .what-am-i {
        ${typeScale.textLg}
    }

    html, body {
        height: 100%;
        min-height: 100vh;
        background: ${baseTheme.siteBackground};
    }
    #___gatsby, #gatsby-focus-wrapper {
        /* height: 100%; */
        min-height: 100vh;
    }
    section {
        padding-top: ${PxToRem(25)};
        padding-bottom: ${PxToRem(25)};
    }
    * {
  box-sizing: border-box;
}
#___gatsby, #gatsby-focus-wrapper, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
}

`;
