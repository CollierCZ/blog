const path = require(`path`)
const {
  createLinkedPages,
  createPaginationPages
} = require("gatsby-pagination");


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type.match(/KenticoCloudItem/)) {
    createNodeField({
      node,
      name: `slug`,
      value: node.url.value
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {    
    const indexPage = path.resolve("src/templates/index.js");
    const articlePage = path.resolve("src/templates/article.js");
    const aboutPage = path.resolve("src/templates/about.js");
    const tagPage = path.resolve("src/templates/tag.js");
    const categoryPage = path.resolve("src/templates/category.js");
    const authorPage = path.resolve("src/templates/author.js");

    graphql(
    `
    {
      allKenticoCloudItemArticle {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      },
      allKenticoCloudItemHome {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      },
      allKenticoCloudItemAbout {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      },
      allKenticoCloudItemAuthor {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
      createPaginationPages({
        createPage,
        edges: result.data.allKenticoCloudItemArticle.edges,
        component: indexPage,
        limit: 10
      });

      createLinkedPages({
        createPage,
        edges: result.data.allKenticoCloudItemArticle.edges,
        component: articlePage,
        edgeParser: edge => ({
          path: edge.node.fields.slug,
          context: {
            slug: edge.node.fields.slug
          }
        }),
        circular: true
      });

      const tagSet = new Set();
      const tagMap = new Map();
      const categorySet = new Set();
      const authorSet = new Set();


      /*result.data.allKenticoCloudItemArticle.edges.forEach(({ node }) => {
        if (node.tags.value) {
          tagString = edge.node.tags.value;
          tagArray = tagString.Split(",")
          tagArray.forEach(tag => {
            tagSet.add(tag);
            const array = tagMap.has(tag) ? tagMap.get(tag) : [];
            array.push(edge);
            tagMap.set(tag, array);
          });
        }

        if (node.category.value) {
          categorySet.add(edge.node.frontmatter.category);
        }

        if (node.authors.name.value) {
          authorSet.add(edge.node.authors.name.value);
        }
      });*/

      result.data.allKenticoCloudItemHome.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: indexPage,
          context: {
            slug: node.fields.slug
          },
        })
      });
      result.data.allKenticoCloudItemAbout.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: aboutPage,
          context: {
            slug: node.fields.slug
          },
        })
      });
      result.data.allKenticoCloudItemAuthor.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: authorPage,
          context: {
            slug: node.fields.slug
          },
        })
      })
      resolve()
    })
  })
};