import path from 'path';

async function turnTagsIntoPages({ graphql, actions }) {
  // get a template for this page
  const tagsTemplate = path.resolve('./src/pages/writer.js');
  // query all articles related to this tag
  const { data } = await graphql(`
    query {
      allTags: allSanityArticleTags {
        nodes {
          id
          name
        }
      }
    }
  `);
  // console.log(data.allTags.nodes, 'asdf');
  data.allTags.nodes.forEach((tag) => {
    actions.createPage({
      path: `tag/${tag.name}`,
      component: tagsTemplate,
      context: {
        tagName: tag.name,
        tagRegex: `/${tag.name}/i`,
      },
    });
  });
}

async function turnArticlesIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/article.js');

  const { data } = await graphql(`
    query {
      allArticles: allSanityWriter {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // console.log(data.allArticles.nodes);
  data.allArticles.nodes.forEach((article) => {
    actions.createPage({
      path: `writer/article/${article.slug.current}`,
      component: template,
      context: {
        slug: article.slug.current,
        id: article.id,
        titleRegex: `/${article.title}/i`,
      },
    });
  });
}

export async function createPages(params) {
  // 1. tags
  // 2. article details

  await Promise.all([turnTagsIntoPages(params), turnArticlesIntoPages(params)]);
}
