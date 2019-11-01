import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { css } from '@emotion/core'

class PageDescription extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            kontentItemHome{
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
            <h2
              css={css`
                margin: 0;
                font-size: 2rem;
                line-height: 1.5em;
                font-weight: 400;
                letter-spacing: 0.01rem;
                color: #ffffff;
                @media only screen and (max-width: 900px) {
                  font-size: 1.8rem;
                  line-height: 1.5em;
                }
                @media only screen and (max-width: 500px) {
                  font-size: 1.6rem;
                }
              `}
            >{text ? text : data.kontentItemHome.elements.metadata__description.value}</h2>
            )
          }}
        />
      )
    }
  }

export default PageDescription;
