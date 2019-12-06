import React from "react";
import { graphql } from "gatsby";
import Listing from "../components/Listing";
import "../layouts/index.css";

const CategoryTemplate = ({data, pageContext}) => {  
  return <Listing data={data} context={pageContext} headStyle="small" />
}

export const query = graphql`
  query categoryQuery ($categoryName: String) {
    header: kontentItemCategory(fields: {slug: {eq: $categoryName}}){
      elements {
        metadata__keywords {
          value
        }
        metadata__description {
          value
        }
        banner_image {
          value {
            url
          }
        }
      }
    },
    config: kontentItemHome{
      ...SocialMediaFragment
    },
    articles: allKontentItemArticle (
      sort: { fields: [fields___date], order: DESC }
      filter: {elements: {categories: {value: {elemMatch: {codename: {eq: $categoryName }}}}}}
    ) {
      edges {
        node {
          ...ArticleListFragment
        }
      }
    }
  }
` 

export default CategoryTemplate;