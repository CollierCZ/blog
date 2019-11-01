import React from "react";
import { graphql } from "gatsby";
import Listing from "../components/Listing";
import "../layouts/index.css";

const CategoryTemplate = ({data, pageContext}) => {  
  return <Listing data={data} context={pageContext} headStyle="small" />
}

export const query = graphql`
  query categoryQuery ($category: String) {
    config: kontentItemHome{
      ...SocialMediaFragment
    },
    articles: allKontentItemArticle (
      sort: { fields: [fields___date], order: DESC }
      filter: {elements: {categories: {value: {elemMatch: {name: {in: [$category] }}}}}}
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