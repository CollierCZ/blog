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
      elements {
        socialmedia {
          value
        }
      }
    },
    articles: allKenticoCloudItemArticle (
            sort: { fields: [fields___date], order: DESC }
            filter: { fields: {tags: {in: [$tag] } }, elements: {publish_date: {datetime: {gte: "2019-06-03T00:00:00.000Z"}}}} 
        ) {
      edges {
        node {
          fields {
            slug
            date
            tags
          }
          elements {
            metadata__description {
              value
            }
            categories {
              value {
                name
              }
            }
            title {
              value
            }
            teaser {
              value {
                url
              }
            }            
          }
        }
      }
    }
  }
` 

export default TagTemplate;