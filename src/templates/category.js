import React from "react";
import { graphql } from "gatsby";
import Listing from "../components/Listing";
import "../layouts/index.css";

class CategoryTemplate extends React.Component {
  render() {
    const {
      category,
      first,
      group,
      index,
      last,
      pageCount
    } = this.props.pageContext;

    const info = {
      category: category,
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
  query categoryQuery ($category: String) {
    config: kenticoCloudItemHome{
      elements {
        socialmedia {
          value
        }
      }
    },
    articles: allKenticoCloudItemArticle (
            sort: { fields: [fields___date], order: DESC }
            filter: {elements: {categories: {value: {elemMatch: {name: {in: [$category] }}}},publish_date: {datetime: {gte: "2019-06-03T00:00:00.000Z"}}}}
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

export default CategoryTemplate;