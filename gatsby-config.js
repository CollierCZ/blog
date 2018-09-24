module.exports = {
  siteMetadata: {
    siteUrl: "https://colliercz.github.io/",
    title: "Aaron Collier",
    description: "Educator, editor, elucidator"
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
          usePreviewMode: false,
          linkResolver: link => {
            if (link.type === 'mvp') {
              return `/mvp/${urlSlug}`;
            }
          },
          richTextResolver: item => {
            if (item.system.type == 'actor') {
              return `<a href="/mvp/${item.urlSlug}">${item.name}</a>`;
            }
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { kenticoCloudItemHome, allKenticoCloudItemArticle } }) => {
              return allKenticoCloudItemArticle.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.title.value,
                  description: edge.node.metadata__description.value,
                  categories: edge.node.fields.tags,
                  date: edge.node.publish_date.datetime,
                  url: kenticoCloudItemHome.base_url.value + "/articles" + edge.node.fields.slug,
                  guid: kenticoCloudItemHome.base_url.value + "/articles" +  edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.body.value }]
                })
              })
            },
            query: `
              {
                allKenticoCloudItemArticle (
                  limit: 10,
                  sort: { fields: [publish_date___datetime], order: DESC }
                ) {
                  edges {
                    node {
                      metadata__description {
                        value
                      }
                      publish_date {
                        datetime
                      }
                      body {
                        value
                      }
                      fields { 
                        slug
                        tags
                      }
                      title {
                        value
                      }
                    }
                  }
                },
                kenticoCloudItemHome {
                  base_url {
                    value
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