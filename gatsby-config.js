module.exports = {
siteMetadata: {
  title: `GatsbyJS`,
  description: `Blazing fast modern site generator for React`,
  siteUrl: `https://www.gatsbyjs.org`
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
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allKenticoCloudItemArticle } }) => {
              return allKenticoCloudItemArticle.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.metadata__description.value,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.body.value }],
                })
              })
            },
            query: `
              {
                allKenticoCloudItemArticle(
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
                      fields { slug }
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