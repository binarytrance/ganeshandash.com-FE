import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ParagraphText } from 'styles/Modules/Text';
import { H1, SectionHeading } from '../../styles/Modules/Headings';
import { DeveloperStyles } from '../../styles/Layouts/DeveloperStyles';
import DeccanHerald from '../../assets/images/deccan_herald.png';
import Factspan from '../../assets/images/factspan.png';
import { ArticlesListStyles } from '../../styles/Modules/ArticlesListStyles';
import ArticleListItem from '../Articles/ArticleListItem';

const Developer = () => {
  const contactRef = useRef();
  const data = useStaticQuery(graphql`
    query {
      articles: allSanityWriter(
        filter: { tags: { elemMatch: { name: { in: "javascript" } } } }
      ) {
        nodes {
          id
          title
          summary
          publishedAt
          slug {
            current
          }
          tags {
            name
            id
          }
        }
      }
    }
  `);
  return (
    <DeveloperStyles>
      <section id="about">
        <H1 className="greeting">
          <small className="greeting__namaste">Namaste, I'm </small>
          <p className="greeting__me">Ganeshan Dash!</p>
          <p className="greeting__hats">
            I am a web enthusiast who is passionate about crafting and
            scaling fast and accessible digital experiences , with an emphasis
            on **Design Systems, UI**, **UX**, and **animations**. I also write
            about my learnings among other things, take photographs, play music
            and hangout on Github, Codepen/codesandbox and Dribble.
          </p>
        </H1>
      </section>
      <section id="projects">
        <SectionHeading>Past Work</SectionHeading>
        <ul className="past-work">
          <li>
            <img src={DeccanHerald} alt="deccan herald" />
            <div className="past-work__details">details</div>
          </li>
          <li>
            <img src={Factspan} alt="factspan" />
            <div className="past-work__details">details</div>
          </li>
        </ul>
      </section>
      <section id="blog">
        <SectionHeading>Blog</SectionHeading>
        {data.articles.nodes && data.articles.nodes.length > 0 ? (
          <ArticlesListStyles>
            {data.articles.nodes.map((article) => (
              <ArticleListItem article={article} />
            ))}
          </ArticlesListStyles>
        ) : null}
      </section>
      <section id="contact" ref={contactRef}>
        <SectionHeading>Get in touch</SectionHeading>
        <ParagraphText>
          Whether it is to discuss about a problem that needs solving, offer
          feedback, or you just want to say hi, you can reach me on my{' '}
          <a href="mailto:ganeshan.dash@gmail.com">Email.</a>
        </ParagraphText>
      </section>
      <hr />
      <section>
        <SectionHeading>This Website</SectionHeading>
        <ParagraphText>
          ... is an exercise to come out of an uninspired rut/comfort zone, if
          you will. I am hoping to write more and learn new things in a much
          more fun way and this here will be my creative outlet.
        </ParagraphText>
        <ParagraphText>
          ... has been designed and devloped by Ganeshan Dash.
        </ParagraphText>
        <ParagraphText>
          ... has been built with{' '}
          <a target="_blank" href="https://www.gatsbyjs.com/" rel="noreferrer">
            Gatsby
          </a>{' '}
          and{' '}
          <a target="_blank" href="https://www.sanity.io/" rel="noreferrer">
            Sanity
          </a>
          . Hosted on{' '}
          <a target="_foo" href="https://www.netlify.com/">
            Netlify
          </a>
        </ParagraphText>
      </section>
    </DeveloperStyles>
  );
};

export default Developer;
