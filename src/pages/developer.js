import React from 'react';
import { graphql } from 'gatsby';
import { ArticlesListStyles } from '../styles/Modules/ArticleListItemStyles';
import ArticleListItem from '../components/ArticleListItem';
import { H1, SectionHeading } from '../styles/Modules/Headings';
import { DeveloperStyles } from '../styles/Layouts/DeveloperStyles';
import { SidebarContents } from '../styles/Modules/SidebarContents';
import DeccanHerald from '../assets/images/deccan_herald.png';
import Factspan from '../assets/images/factspan.png';

const Developer = ({ data }) => {
  console.log(data);

  return (
    <>
      <SidebarContents>
        <ul>
          <li>About</li>
          <li>Past Work</li>
          <li>Blog</li>
        </ul>
      </SidebarContents>
      <DeveloperStyles>
        <section>
          <H1 className="greeting">
            <small className="greeting__namaste">Namaste, I'm </small>
            <p className="greeting__me">Ganeshan Dash!</p>
            <p className="greeting__hats">
              I am a web enthusiast who is passionate about crafting and
              scaling fast and accessible digital experiences , with an emphasis
              on **Design Systems, UI**, **UX**, and **animations**. I also
              write about my learnings among other things, take photographs,
              play music and hangout on Github, Codepen/codesandbox and Dribble.
            </p>
          </H1>
        </section>
        <section>
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
        <section>
          <SectionHeading>Blog</SectionHeading>
          {data.articles.nodes && data.articles.nodes.length > 0 ? (
            <ArticlesListStyles>
              {data.articles.nodes.map((article) => (
                <ArticleListItem article={article} />
              ))}
            </ArticlesListStyles>
          ) : null}
        </section>
      </DeveloperStyles>
    </>
  );
};

export const pageQuery = graphql`
  query Developer {
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
`;

export default Developer;
