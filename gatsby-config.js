module.exports = {
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
    }
  ]
}