import { graphql } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
import { baseTheme, typeScale } from '../styles/utils';
import Lightbulb from '../assets/images/lightbulb.svg';

const HomePageStyles = styled.section`
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    align-items: center;
    grid-template-rows: auto;
  }
  .content-wrapper {
    display: grid;
    grid-template-columns: 0.4fr 0.6fr; // mk1
    grid-template-rows: auto auto;
    grid-gap: 20px;
    align-items: center;
  }
  .greeting {
    &__namaste {
      font-family: 'Yatra';
      ${typeScale.header3};
    }
    &__me {
      ${typeScale.header1};
    }
    &__hats {
      ${typeScale.textLg};
    }
  }
  .skills {
    margin-top: 50px;
    &__list {
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
  }
  .details {
    display: grid;
    /* &__image-container {
      grid-column: 1/-1; // this simulates position absolute. both this and its sibling will be on stacked vertically
      grid-row: 1/-1;
      height: 100%;
      width: 100%;
    }
    &__content {
      grid-column: 1/-1; // this simulates position absolute
      grid-row: 1/-1;
      height: 100%;
      width: 100%;
    } */
  }
`;

// markup
const HomePage = ({ data }) => {
  console.log(data, typeof Lightbulb, Lightbulb);
  const skills = data.skills.nodes;
  return (
    <HomePageStyles>
      <title>Home Page</title>
      <div className="content-wrapper">
        {/* <div> */}
        <h1 className="greeting">
          <small className="greeting__namaste">Namaste</small>
          <br />
          <span className="greeting__me">I'm Ganeshan!</span>
          <br />
          <small className="greeting__hats">And I put on many hats.</small>
          <br />
        </h1>
        <div className="skills">
          <ul className="skills__list">
            {skills.map((skill, index) => (
              <li key={skill.name + index}>{skill.name}</li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        <div className="details">
          <div className="details__image-container">
            <img src={Lightbulb} alt="light bulb" />
          </div>
        </div>
        <div className="details__content">asdf</div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;

export const query = graphql`
  query skillsQuery {
    skills: allSanitySkills {
      nodes {
        name
        slug {
          current
        }
        description
      }
    }
    lightbulb: file(relativePath: { eq: "lightbulb.svg" }) {
      relativePath
      childImageSharp {
        fluid {
          src
          srcSet
          base64
          sizes
          aspectRatio
        }
      }
    }
  }
`;
