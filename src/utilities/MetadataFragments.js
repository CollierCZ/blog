import { graphql } from "gatsby"

export const MetadataFragment = graphql `
  fragment MetadataFragment on KenticoCloudItemHome {
    elements {
      title {
        value
      }
      splash_image {
        assets {
          url
        }
      }
      blog_logo {
        assets {
          url
        }
      }
      metadata__description {
        value
      }
      socialmedia {
        value
      }
      base_url {
        value
      }
    }
  }
`

export const SocialMediaFragment = graphql `
  fragment SocialMediaFragment on KenticoCloudItemHome {
    elements {
      socialmedia {
        value
      }
    }
  }
`