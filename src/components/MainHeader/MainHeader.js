import { graphql, StaticQuery } from "gatsby";
import React from "react";
import classNames from "classnames";
import "./MainHeader.css";

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className);

    return (
    <StaticQuery
      query={graphql`
        query {
          kenticoCloudItemHome{
            elements {
              splash_image {
                assets {
                  url
                }
              }
            }
          }
        }
      `}
      render = {data => {
        return (
        <header className={classes} style={{backgroundImage: `url("`+(cover ? cover : data.kenticoCloudItemHome.elements.splash_image.assets[0].url)+`")`}}>
          {children}
        </header>
        )
      }}
    />)
  }
}

export default MainHeader;
