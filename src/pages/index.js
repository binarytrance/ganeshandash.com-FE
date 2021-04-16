import { graphql } from 'gatsby';
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
      }
    }
  }
`;

// markup
const HomePage = ({ data }) => {
  console.log(data);
  const skills = data.skills.nodes;
  return (
    <HomePageStyles>
      <title>Home Page</title>
      <div>
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
            {skills.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </div>
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
  }
`;
