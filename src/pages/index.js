import { graphql } from 'gatsby';
import * as React from 'react';

import styled from 'styled-components';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import favicon from '../assets/images/static/favicon.ico';
import { baseTheme, typeScale } from '../styles/utils';
// import Lightbulb from '../assets/images/lightbulb.svg';
// import Img from "gatsby-image"

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
    height: 630px;
    overflow: visible; // content with more height can be visible, yet the poisiton of the centered div remains same
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
    grid-column: 5/12;
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
const HomePage = ({ data }) => {
  const [highlightedSkills, setHighlightedSkills] = React.useState(null);
  const skills = data.skills.nodes;
  const showSkillsDetails = (e) => {
    console.log('hover', e);

    const selectedSkill = skills.filter(
      (skill) => e.target.innerHTML === skill.name
    );
    setHighlightedSkills(selectedSkill[0]);
  };
  console.log(highlightedSkills, skills);

  return (
    <HomePageStyles>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ganeshan Dash</title>
        <link rel="canonical" href="http://ganeshandash.com/" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
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
            <li
              key={skill.name + index}
              onMouseEnter={showSkillsDetails}
              className={skill.name}
            >
              {skill.name}
            </li>
          ))}
        </ul>
        <div
          className={`banner-image ${
            highlightedSkills ? 'banner-image--background' : ''
          }`}
        >
          <img src={data.local.publicURL} alt="light bulb" />
          {/* <GatsbyImage image={data.local.publicURL} alt="light bulb" /> */}
        </div>
        {highlightedSkills ? (
          <div className="skill-summary">
            <p className="ordinary-text">{highlightedSkills.description}</p>
            <h2>Latest Work</h2>
            <p className="ordinary-text">latest work goes here.</p>
            <div className="current-occupation">
              <h2>Currently occupied with:</h2>
              {highlightedSkills.image ? (
                // <GatsbyImage image={highlightedSkills.image.asset} alt="text" />
                <img
                  src={highlightedSkills.image.asset.url}
                  alt={highlightedSkills.image.asset.caption}
                  className="skill-summary__image"
                />
              ) : null}
            </div>
            {/* <p>either image or text</p> */}
          </div>
        ) : null}
      </div>
    </HomePageStyles>
  );
};

export default HomePage;

export const query = graphql`
  query skillsQuery {
    local: file(relativePath: { eq: "lightbulb.svg" }) {
      publicURL
    }
    skills: allSanitySkills {
      nodes {
        name
        id
        description
        slug {
          current
        }
        image {
          asset {
            path
            url
            title
            size
          }
        }
      }
      totalCount
    }
  }
`;
