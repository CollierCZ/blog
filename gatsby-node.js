const path = require(`path`);
const _ = require("lodash");
const {
  createLinkedPages,
  createPaginationPages
} = require("gatsby-pagination");
const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `Article`;
const paginationLimit = 3;


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type.match(/KenticoCloudItem/)) {
    createNodeField({
      node,
      name: `slug`,
      value: node.url.value
    })

    if (node.internal.type === `${kcItemTypeIdentifier}${articleTypeIdentifier}`) {
      createNodeField({
        node,
        name: `tags`,
        value: node.metadata__keywords.value.split(",")
      })

      createNodeField({
        node,
        name: `category`,
        value: node.categories.value[0].name
      })

      createNodeField({
        node,
        name: `author`,
        value: node.authors[0].name.value
      })
    }
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
    resolve(
      graphql(
      `
      {
        allKenticoCloudItemArticle {
          edges {
            node {
              fields {
                slug
                tags
                category
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
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        createPaginationPages({
          createPage,
          edges: result.data.allKenticoCloudItemArticle.edges,
          component: indexPage,
          limit: paginationLimit
        });

        createLinkedPages({
          createPage,
          edges: result.data.allKenticoCloudItemArticle.edges,
          component: articlePage,
          edgeParser: edge => ({
            path: `/articles/${edge.node.fields.slug}/`,
            context: {
              slug: edge.node.fields.slug
            }
          }),
          circular: true
        });

        const tagSet = new Set();
        const tagMap = new Map();
        const categorySet = new Set();
        const categoryMap = new Map();

        result.data.allKenticoCloudItemArticle.edges.forEach(({ node }) => {
          if (node.fields.tags) {
            node.fields.tags.forEach(tag => {
              tagSet.add(tag);
              const array = tagMap.has(tag) ? tagMap.get(tag) : [];
              array.push(node);
              tagMap.set(tag, array);
            });
          }

          if (node.fields.category) {
            const category = node.fields.category;
            categorySet.add(category);
            const array = categoryMap.has(category) ? categoryMap.get(category) : [];
            array.push(node);
            categoryMap.set(category, array);
          }
        });

        const tagFormatter = tag => route =>
          `/tags/${_.kebabCase(tag)}/${route !== 1 ? route : ""}`;
        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPaginationPages({
            createPage,
            edges: tagMap.get(tag),
            component: tagPage,
            pathFormatter: tagFormatter(tag),
            limit: paginationLimit,
            context: {
              tag
            }
          });
        });

        const categoryFormatter = category => route =>
          `/category/${_.kebabCase(category)}/${route !== 1 ? route : ""}`;
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPaginationPages({
            createPage,
            edges: categoryMap.get(category),
            component: categoryPage,
            pathFormatter: categoryFormatter(category),
            limit: paginationLimit,
            context: {
              category
            }
          });
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
        });
      })
    );
  });
};