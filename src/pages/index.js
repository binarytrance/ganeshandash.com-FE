import { graphql, Link } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import { Island } from '../styles/Layouts/Island';
import favicon from '../assets/images/static/favicon.ico';
import { baseTheme, typeScale } from '../styles/utils';
import Developer from '../components/Developer';
import Footer from '../components/Footer/Footer';
// import { Island } from 'styles/Layouts/Island';
// import Lightbulb from '../assets/images/lightbulb.svg';
// import Img from "gatsby-image"

const HomePageStyles = styled.div`
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-rows: auto;
  }
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr); // mk1
    grid-template-rows: 30px auto auto 30px;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    height: 630px;
    overflow: visible; // content with more height can be visible, yet the poisiton of the centered div remains same
  }
  .greeting {
    grid-column: 1/-1;
    grid-row: 2/3;
    &__namaste {
      font-family: 'Yatra';
      ${typeScale.header3};
    }
    &__me {
      ${typeScale.header1};
    }
    &__hats {
      ${typeScale.textMd};
    }
  }
  .skills {
    grid-column: 1/6;
    grid-row: 3/4;
    li {
      ${typeScale.header2};
      margin-bottom: 16px;
      position: relative;
      width: max-content;
      z-index: var(--z-level-top);
      cursor: pointer;
      &::before {
        position: absolute;
        content: '';
        height: 8px;
        width: 100%;
        background: ${baseTheme.neutral};
        left: 0%;
        bottom: 7px;
        z-index: var(--z-level-psuedo);
      }
    }
  }
  .banner-image {
    display: grid;
    grid-column: 6/-1;
    grid-row: 1/5;
    &--background {
      transition: 0.3s ease-out;
      transform: perspective(500px) translateY(-170px) translateX(464px)
        translateZ(-200px);
      opacity: 0.2;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .skill-summary {
    grid-column: 6/-1;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    &__image {
      max-width: 200px;
    }
  }
  .ordinary-text {
    ${typeScale.textLg};
    margin-bottom: 25px;
  }
  h2 {
    ${typeScale.textMd};
  }
  .current-occupation {
    position: relative;
    display: inline-block;
    margin-top: auto;
    width: fit-content;
    h2 {
      z-index: var(--z-level-top);
    }
    img {
      position: absolute;
      top: -30px;
      z-index: var(--z-level-bottom);
      opacity: 0.6;
      left: 85%;
    }
  }
`;

// markup
const HomePage = () => (
  <>
    <Island>
      <HomePageStyles className="yuu">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ganeshan Dash</title>
          <link rel="canonical" href="http://ganeshandash.com/" />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>

        <Developer />
      </HomePageStyles>
    </Island>
    <Footer />
  </>
);
export default HomePage;

// export const query = graphql`
//   query skillsQuery {
//     local: file(relativePath: { eq: "lightbulb.svg" }) {
//       publicURL
//     }
//     skills: allSanitySkills {
//       nodes {
//         name
//         id
//         description
//         slug {
//           current
//         }
//         mainImage {
//           asset {
//             path
//             url
//             title
//             size
//           }
//         }
//       }
//       totalCount
//     }
//   }
// `;
