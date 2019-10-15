import { graphql, StaticQuery } from "gatsby"
import React from "react"
import classNames from "classnames"
import { css } from '@emotion/core'

class MainHeader extends React.Component {
  render() {
    const { children, cover, headStyle } = this.props;

    var height;
    if (headStyle === "big") {
      height = 65;
    }
    if (headStyle === "medium") {
      height = 50;
    }
    if (headStyle === "small") {
      height = 40;
    }

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
        <header
          className={classes}
          style={{backgroundImage: `url("`+(cover ? cover : data.kenticoCloudItemHome.elements.splash_image.assets[0].url)+`")`}}
          css={css`
            position: relative;
            display: table;
            width: 100%;
            height: ${height}vh;
            min-height: 180px;
            text-align: center;
            background: #222 no-repeat center center;
            background-size: cover;
            overflow: hidden;
            .main-header-content {
              width: 100%;
              margin: 0 auto;
              display: table-cell;
              vertical-align: middle;
            }
            @media only screen and (max-width: 900px) {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              min-height:220px;
              height: ${height - 10}vh;
            }
            @media only screen and (max-width: 500px) {
              height: ${height - 20}vh;
            }
          `}
        >
          {children}
        </header>
        )
      }}
    />)
  }
}

export default MainHeader;
