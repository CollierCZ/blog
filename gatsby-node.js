const createPaginatedPages = require("gatsby-paginate");
const _ = require("lodash");
const moment = require("moment");
const path = require(`path`);

const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `Article`;
const paginationLimit = 6;

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
        name: `date`,
        value: node.elements.publish_date.datetime
      })
      createNodeField({
        node,
        name: `tags`,
        value: node.elements.metadata__keywords.value.split(',')
      })
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const indexPage = path.resolve("src/templates/index.js");
  const articlePage = path.resolve("src/templates/article.js");
  const tagPage = path.resolve("src/templates/tag.js");
  const categoryPage = path.resolve("src/templates/category.js");
  const authorPage = path.resolve("src/templates/author.js");
  const kcQueryResult = await graphql(
    `
    {
      allKenticoCloudItemArticle {
        edges {
          node {
            elements {
              metadata__description {
                value
              }
              categories {
                value {
                  name
                }
              }
              title {
                value
              }
              teaser {
                value {
                  url
                }
              }
            }
            fields {
              date
              slug
              tags
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
    `
    );

    if (kcQueryResult.errors) {
      console.error(kcQueryResult.errors);
      throw kcQueryResult.errors;
    }

    kcQueryResult.data.allKenticoCloudItemAuthor.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: authorPage,
        context: {
          slug: node.fields.slug
        },
      })
    });

    const articleEdges = kcQueryResult.data.allKenticoCloudItemArticle.edges;

    let tagSet = new Set();
    let tagMap = new Map();
    let categorySet = new Set();
    let categoryMap = new Map();

    articleEdges.sort((articleA,articleB) => { 
        const dateA = moment(articleA.node.fields.date, "YYYY-MM-DD");
        const dateB = moment(articleB.node.fields.date, "YYYY-MM-DD");
  
        if (dateA.isBefore(dateB)) return 1;
  
        if (dateB.isBefore(dateA)) return -1;
  
        return 0;
      }
    );
    articleEdges.forEach((edge, i) => {
      if (edge.node.fields.tags) {
        let tags = edge.node.fields.tags;
        tags.forEach(tag => {
          tagSet.add(tag);
          const array = tagMap.has(tag) ? tagMap.get(tag) : [];
          array.push(edge.node);
          tagMap.set(tag, array);
        });
      }
  
      if (edge.node.elements.categories.value[0].name) {
        const category =edge.node.elements.categories.value[0].name
        categorySet.add(category);
        const array = categoryMap.has(category) ? categoryMap.get(category) : [];
        array.push(edge.node);
        categoryMap.set(category, array);
      }

      const nextID = i + 1 < articleEdges.length ? i + 1 : 0;
      const prevID = i - 1 > 0 ? i - 1 : articleEdges.length - 1;
      const nextEdge = articleEdges[nextID];
      const prevEdge = articleEdges[prevID];
      

      createPage({
        path: `articles/`+edge.node.fields.slug,
        component: articlePage,
        context: {
          slug: edge.node.fields.slug,
          nextSlug: nextEdge.node.fields.slug,
          prevSlug: prevEdge.node.fields.slug
        }
      });
    });
    createPaginatedPages({
      createPage: createPage,
      edges: articleEdges,
      pageLength: paginationLimit,
      pageTemplate: indexPage
    });
    
    tagSet.forEach(tag => {
      createPaginatedPages({
        createPage: createPage,
        edges: tagMap.get(tag),
        pageTemplate: tagPage,
        pathPrefix: `tags/${_.kebabCase(tag.trim())}`,
        context: {
          tag
        }
      });
    });

    categorySet.forEach(category => {
      createPaginatedPages({
        createPage: createPage,
        edges:  categoryMap.get(category),
        pageTemplate: categoryPage,
        pathPrefix: `category/${_.kebabCase(category.trim())}`,
        context: {
          category
      }
    });
  })
};