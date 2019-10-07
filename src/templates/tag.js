import React from "react";
import { graphql } from "gatsby";
import Listing from "../components/Listing";
import "../layouts/index.css";

class TagTemplate extends React.Component {
  render() {
    const {
      tag,
      first,
      group,
      index,
      last,
      pageCount
    } = this.props.pageContext;

    const info = {
      tag: tag,
      headStyle: "small",
      first: first,
      group: group,
      index: index,
      last: last,
      pageCount: pageCount,
      nodes: this.props.data.articles.edges,
      socialUrls: this.props.data.config.elements.socialmedia.value.split(",")
    }
    
  return (
    <Listing info={info} />
    )
  }
}


export const query = graphql`
  query ($tag: String!) {
    config: kenticoCloudItemHome{
      ...SocialMediaFragment
    },
    articles: allKenticoCloudItemArticle (
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