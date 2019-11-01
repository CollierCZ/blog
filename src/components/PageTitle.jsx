import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { css } from '@emotion/core'

class PageTitle extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            kontentItemHome{
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
            <h1
              css={css`
                margin: 10px 0;
                font-size: 5rem;
                letter-spacing: -1px;
                font-weight: 700;
                font-family: "Open Sans", sans-serif;
                color: #ffffff;
                text-shadow: 1px 1px #000;
                @media only screen and (max-width: 900px) {
                  font-size: 4rem;
                  letter-spacing: -1px;
                }
                @media only screen and (max-width: 500px) {
                  font-size: 3rem;
                }
              `}
            >{text ? text : data.kontentItemHome.elements.title.value}</h1>
          )
        }}
      />
    )
  }
}

export default PageTitle;
