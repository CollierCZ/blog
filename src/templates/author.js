import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/SiteWrapper/SiteWrapper"

export default ({ data }) => {
  return (
  <Layout>
    <h1>Me</h1>
    <div  />
  </Layout>
)
}

export const query = graphql`
query authorQuery($slug: String!) {
  kenticoCloudItemAuthor(fields: { slug: { eq: $slug } })  {
    system {
      last_modified   
    }
  }
}
`