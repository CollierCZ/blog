const config = require("./data/config");

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.title,
    author: "Aaron Collier",
    description: config.description,
    icon: config.icon
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: `3fcf700a-30e8-4d1d-9e64-43193a89fe7a`,
        },
        languageCodenames: [
          "default"
        ],
        queryConfig: {
          usePreviewMode: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options:  {
          name: config.title,
          short_name: config.title,
          description: config.description,
          start_url: "/",
          background_color: "#bf9b63",
          theme_color: "#f3cc91",
          display: "minimal-ui",
          icon: config.icon
        }    
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { kenticoCloudItemHome, allKenticoCloudItemArticle } }) => {
              return allKenticoCloudItemArticle.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.elements.title.value,
                  description: edge.node.elements.metadata__description.value,
                  categories: edge.node.fields.tags,
                  date: edge.node.fields.date,
                  url: kenticoCloudItemHome.elements.base_url.value + "/articles/" + edge.node.fields.slug,
                  guid: kenticoCloudItemHome.elements.base_url.value + "/articles/" +  edge.node.fields.slug
                })
              })
            },
            query: `
              {
                allKenticoCloudItemArticle (
                  limit: 10,
                  sort: { fields: [fields___date], order: DESC }
                ) {
                  edges {
                    node {
                      elements {
                        metadata__description {
                          value
                        }
                        body {
                          value
                        }
                        title {
                          value
                        }
                      }
                      fields { 
                        slug
                        tags
                        date
                      }
                    }
                  }
                },
                kenticoCloudItemHome {
                  elements {
                    base_url {
                      value
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    }
  ]
}