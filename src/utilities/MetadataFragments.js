import { graphql } from "gatsby"

export const MetadataFragment = graphql `
  fragment MetadataFragment on KontentItemHome {
    elements {
      title {
        value
      }
      splash_image {
        value {
          url
        }
      }
      blog_logo {
        value {
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
  fragment SocialMediaFragment on KontentItemHome {
    elements {
      socialmedia {
        value
      }
    }
  }
`