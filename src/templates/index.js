import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/SiteWrapper"
import ArticleListing from "../components/ArticleListing/ArticleListing"


class IndexTemplate extends React.Component {
  render() {
    const nodes = this.props.data.articles.edges;

  return (
      <Layout>
        <div>
          <h2>Experiment</h2>
          <ArticleListing articleEdges={nodes} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query articlesQuery {
    articles: allKenticoCloudItemArticle {
      edges {
        node {
          fields {
            slug
          }
          metadata__keywords {
            value
          }
          metadata__description {
            value
          }
          title {
            value
          }
          teaser {
            value {
              url
            }
          }
          system {
            lastModified
          }
          authors {
            picture {
              value {
                url
              }
            }
            short_bio {
              value
            }
            name {
              value
            }
            url {
              value
            }
          }
        }
      }
    }
  }
` 

export default IndexTemplate;