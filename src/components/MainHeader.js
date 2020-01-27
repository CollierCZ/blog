import React from "react"
import { css } from 'styled-components'
import { useSiteMetadata } from "../hooks/use-metadata";
import { string } from "prop-types";

export const PureMainHeader = ({props, siteMetadata}) => {
  const { children, cover, headStyle } = props;
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

  return (
      <header
        className="main-header"
        css={css`
          position: relative;
          display: table;
          width: 100%;
          height: ${height}vh;
          min-height: 180px;
          text-align: center;
          overflow: hidden;
          background: url(${cover ? cover : siteMetadata.elements.splash_image.value[0].url}) #000 no-repeat center;
          background-size: cover;
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
}

export const MainHeader = props => {
  const siteMetadata = useSiteMetadata();
  return <PureMainHeader props={props} siteMetadata={siteMetadata} />;
}

MainHeader.propTypes = {
  cover: string, 
  headStyle: string.isRequired
};

export default MainHeader;