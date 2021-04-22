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
    grid-template-columns: repeat(12, 1fr); // mk1
    grid-template-rows: 30px auto auto 30px;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
  }
  .greeting {
    grid-column: 1/5;
    grid-row: 2/3;
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
    grid-column: 1/5;
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
    grid-column: 5/12;
    grid-row: 1/5;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .skill-summary {
    grid-column: 5/12;
    grid-row: 3/4;
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
        <h1 className="greeting">
          <small className="greeting__namaste">Namaste</small>
          <br />
          <span className="greeting__me">I'm Ganeshan!</span>
          <br />
          <small className="greeting__hats">And I put on many hats.</small>
          <br />
        </h1>
        <ul className="skills">
          {skills.map((skill, index) => (
            <li key={skill.name + index}>{skill.name}</li>
          ))}
        </ul>
        <div className="banner-image">
          <img src={Lightbulb} alt="light bulb" />
        </div>
        <div className="skill-summary">asdf</div>
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
