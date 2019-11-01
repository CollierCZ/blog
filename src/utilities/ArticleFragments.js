import { graphql } from "gatsby"

export const ArticleListFragment = graphql`
  fragment ArticleListFragment on KontentItemArticle {
    fields {
      slug
      tags
      date
    }
    elements {
      metadata__description {
        value
      }
      metadata__keywords {
        value
      }
      categories {
        value {
          name
        }
      }
      title {
        value
      }
      teaser {
        value {
          url
        }
      }            
    }
  }
`