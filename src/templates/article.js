import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/SiteWrapper"

export default ({ data }) => {
    const article = data.kenticoCloudItemArticle
    return (
      <Layout>
        <div>
          <h1>{article.title.value}</h1>
        </div>
        <div>
        <div dangerouslySetInnerHTML={{ __html: article.body.value }} />
      </div>
      </Layout>
    )
  }
  
  export const query = graphql`
  query articleQuery($slug: String!) {
    kenticoCloudItemArticle(fields: { slug: { eq: $slug } })  {
      title {
        value
      }
      body {
        value
      }
    }
  }
`
  