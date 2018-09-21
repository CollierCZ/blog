import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/SiteWrapper"

export default ({ data }) => {
  const home = data.kenticoCloudItemHome
  return (
  <Layout>
    <h1>{home.title.value}</h1>
    <div dangerouslySetInnerHTML={{ __html: home.body.value }} />
  </Layout>
)
}

export const query = graphql`
query HomeQuery($slug: String!) {
  kenticoCloudItemHome(fields: { slug: { eq: $slug } })  {
    title {
      value
    }
    body {
      value
    }
  }
}
`