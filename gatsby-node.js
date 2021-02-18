const { slugify } = require("./src/utilities/CaseHelpers")
const createPaginatedPages = require("gatsby-paginate");
const path = require(`path`);

const kcItemTypeIdentifier = `kontent_item`;
const articleTypeIdentifier = `article`;
const paginationLimit = 6;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  const typesWithUrlsRegex = new RegExp(kcItemTypeIdentifier + "_" + `(${articleTypeIdentifier}|category|about|author|contact|home)`)

  if (node.internal.type.match(typesWithUrlsRegex)) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.url.value
    })

    if (node.internal.type === `${kcItemTypeIdentifier}_${articleTypeIdentifier}`) {
      createNodeField({
        node,
        name: `date`,
        value: node.elements.publish_date.value
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
      allKontentItemArticle {
        edges {
          node {
            elements {
              categories {
                value {
                  name
                }
              }
            }
            fields {
              date(formatString: "YYYY-MM-DD")
              slug
              tags
            }
          }
        }
      },
      allKontentItemHome {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      },
      allKontentItemAuthor {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      },
      allKontentItemCategory {
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

    kcQueryResult.data.allKontentItemAuthor.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: authorPage,
        context: {
          slug: node.fields.slug
        },
      })
    });

    const articleEdges = kcQueryResult.data.allKontentItemArticle.edges;

    let tagSet = new Set();
    let tagMap = new Map();
    let categoryMap = {};

    articleEdges.sort((articleA,articleB) => { 
        const dateA = articleA.node.fields.date;
        const dateB = articleB.node.fields.date;
  
        if (dateA < dateB) return 1;
  
        if (dateB < dateA) return -1;
  
        return 0;
      }
    );
    articleEdges.forEach((edge, i) => {
      if (edge.node.fields.tags) {
        const tags = edge.node.fields.tags;
        tags.forEach(tag => {
          tagSet.add(tag);
          const array = tagMap.has(tag) ? tagMap.get(tag) : [];
          array.push(edge.node);
          tagMap.set(tag, array);
        });
      }
  
      if (edge.node.elements.categories.value[0].name) {
        const category = slugify(edge.node.elements.categories.value[0].name)
        const array = categoryMap[category] ? categoryMap[category] : [];
        array.push(edge.node);
        categoryMap[category] = array;
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
        pathPrefix: `tags/${slugify(tag)}`,
        context: {
          tag
        }
      });
    });

    kcQueryResult.data.allKontentItemCategory.edges.forEach(category => {
      const categoryName = category.node.fields.slug
      createPaginatedPages({
        createPage: createPage,
        edges:  categoryMap[categoryName],
        pageTemplate: categoryPage,
        pathPrefix: `category/${categoryName}`,
        context: {
          categoryName
      }
    });
  })
};