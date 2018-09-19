const path = require(`path`)


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
    graphql(`
    {
      allKenticoCloudItemArticle {
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
        result.data.allKenticoCloudItemArticle.edges.forEach(({ node }) => {
            createPage({
              path: `article/${node.fields.slug}`,
              component: path.resolve(`./src/templates/article.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug
              },
            })
        })
        resolve()
      })
  })
};