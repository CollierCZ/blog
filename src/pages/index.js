import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          A title
        </h1>
        {data.allKenticoCloudItemArticle.edges.map(({ node }) => (
          <div key={node.fields.slug}>
          <Link
            to={`/article/${node.fields.slug}`}
            className={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.title.value}{" "}
              <span
                className={css`
                  color: #bbb;
                `}
              >
              </span>
            </h3>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query articlesQuery {
    allKenticoCloudItemArticle {
      edges {
        node {
          fields {
            slug
          }
          title {
            value
          }
        }
      }
    }
  }
`