import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "./PageTitle.css";

class PageTitle extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            kenticoCloudItemHome{
              elements {
                title {
                  value
                }
              }
            }
          }
        `}
        render = {data => {
          return (
            <h1 className="page-title">{text ? text : data.kenticoCloudItemHome.elements.title.value}</h1>
          )
        }}
      />
    )
  }
}

export default PageTitle;
