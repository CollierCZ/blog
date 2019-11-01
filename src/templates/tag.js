import React from "react";
import { graphql } from "gatsby";
import Listing from "../components/Listing";
import "../layouts/index.css";

const TagTemplate = ({data, pageContext}) =>  {    
  return <Listing data={data} context={pageContext} headStyle="small" />
}


export const query = graphql`
  query ($tag: String!) {
    config: kontentItemHome{
      ...SocialMediaFragment
    },
    articles: allKontentItemArticle (
            sort: { fields: [fields___date], order: DESC }
            filter: { fields: {tags: {in: [$tag] } } } 
        ) {
      edges {
        node {
          ...ArticleListFragment
        }
      }
    }
  }
` 

export default TagTemplate;