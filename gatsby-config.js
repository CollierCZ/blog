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
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
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
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
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
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { kontentItemHome, allKontentItemArticle } }) => {
              return allKontentItemArticle.edges.map(edge => ({
                  title: edge.node.elements.title.value,
                  description: edge.node.elements.metadata__description.value,
                  categories: edge.node.fields.tags,
                  date: edge.node.fields.date,
                  url: kontentItemHome.elements.base_url.value + "/articles/" + edge.node.fields.slug,
                  guid: kontentItemHome.elements.base_url.value + "/articles/" +  edge.node.fields.slug
              }))
            },
            query: `
              {
                allKontentItemArticle (
                  limit: 10,
                  sort: { fields: [fields___date], order: DESC },
                  filter: {elements: {publish_date: {datetime: {gte: "2019-06-03T00:00:00.000Z"}}}}
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
                        date
                        tags
                      }
                    }
                  }
                },
                kontentItemHome {
                  elements {
                    base_url {
                      value
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Feed for collier.cz"
          },
        ],
      },
    }
  ]
}