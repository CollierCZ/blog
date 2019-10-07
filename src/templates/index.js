import React from "react"
import { graphql } from "gatsby"
import Listing from "../components/Listing"
import "../layouts/index.css";



class IndexTemplate extends React.Component {
  render() {
    const {
      first,
      group,
      index,
      last,
      pageCount
    } = this.props.pageContext;
    const nodes = this.props.data.articles.edges;
    const socialUrls = this.props.data.config.elements.socialmedia.value.split(",");
    const headStyle = "medium";

    const info = {
      headStyle: headStyle,
      first: first,
      group: group,
      index: index,
      last: last,
      pageCount: pageCount,
      nodes: nodes,
      socialUrls: socialUrls
    }
    
  return (
    <Listing info={info} />
    )
  }
}

export const query = graphql`
  query indexQuery {
    config: kenticoCloudItemHome{
      ...SocialMediaFragment
    },
    articles: allKenticoCloudItemArticle (
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