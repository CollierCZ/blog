import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "./PageDescription.css";

class PageDescription extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            kenticoCloudItemHome{
              elements {
                metadata__description {
                  value
                }
              }
            }
          }
        `}
        render = {data => {
          return (
            <h2 className="page-description">{text ? text : data.kenticoCloudItemHome.elements.metadata__description.value}</h2>
            )
          }}
        />
      )
    }
  }

export default PageDescription;
