import React from "react"
import { graphql } from "gatsby"
import Listing from "../components/Listing"
import "../layouts/index.css";

const IndexTemplate = ({data, pageContext}) => {
  return <Listing data={data} context={pageContext} headStyle="medium"  />
}

export const query = graphql`
  query indexQuery {
    config: kontentItemHome{
      ...SocialMediaFragment
    },
    articles: allKontentItemArticle (
      sort: { fields: [fields___date], order: DESC } 
    ) {
      edges {
        node {
          ...ArticleListFragment
        }
      }
    }
  }
` 

export default IndexTemplate;