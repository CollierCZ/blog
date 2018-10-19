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
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        kcDeliveryEndpointUrl: "https://deliver.kenticocloud.com",
        kcProjectId: `3fcf700a-30e8-4d1d-9e64-43193a89fe7a`,
        kcLanguageCodenames: [
          "default"
        ],
        queryConfig: {
          usePreviewMode: false
        }
      }
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
                  date: edge.node.elements.publish_date.value,
                  url: kenticoCloudItemHome.elements.base_url.value + "articles/" + edge.node.fields.slug,
                  guid: kenticoCloudItemHome.elements.base_url.value + "articles/" +  edge.node.fields.slug
                })
              })
            },
            query: `
              {
                allKenticoCloudItemArticle (
                  limit: 10,
                  sort: { fields: [elements___publish_date___value], order: DESC }
                ) {
                  edges {
                    node {
                      elements {
                        metadata__description {
                          value
                        }
                        publish_date {
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