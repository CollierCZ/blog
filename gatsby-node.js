const {
  createLinkedPages,
  createPaginationPages
} = require("gatsby-pagination");
const _ = require("lodash");
const moment = require("moment");
const path = require(`path`);

const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `Article`;
const paginationLimit = 3;
const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
    ({ fields: { date: date1 } }, { fields: { date: date2 } }) => {
      const dateA = moment(date1, "YYYY-MM-DD");
      const dateB = moment(date2, "YYYY-MM-DD");

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
    }
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.elements.title.value
    });
    createNodeField({
      node: currNode,
      name: "nextCover",
      value: nextNode.elements.teaser.value[0].url
    });
    createNodeField({
      node: currNode,
      name: "nextExcerpt",
      value: nextNode.elements.metadata__description.value
    });

    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.elements.title.value
    });
    createNodeField({
      node: currNode,
      name: "prevCover",
      value: prevNode.elements.teaser.value[0].url
    });
    createNodeField({
      node: currNode,
      name: "prevExcerpt",
      value: prevNode.elements.metadata__description.value
    });
  }
}


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type.match(/KenticoCloudItem/)) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.url.value
    })

    if (node.internal.type === `${kcItemTypeIdentifier}${articleTypeIdentifier}`) {
      createNodeField({
        node,
        name: `tags`,
        value: node.elements.metadata__keywords.value.split(",")
      })

      createNodeField({
        node,
        name: `category`,
        value: node.elements.categories.value[0].name
      })

      createNodeField({
        node,
        name: `date`,
        value: node.elements.publish_date.datetime
      })
      postNodes.push(node);
    }
  }
};


exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === `${kcItemTypeIdentifier}${articleTypeIdentifier}`) {
    addSiblingNodes(createNodeField);
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