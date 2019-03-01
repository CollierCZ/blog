import { css } from '@emotion/core'
import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer
        className="clearfix"
        css={css`
          position: relative;
          margin: 1rem 0 0;
          padding: 1rem 15px;
          font-family: "Open Sans", sans-serif;
          font-size: 1rem;
          line-height: 1.75em;
          color: #bbc7cc;
          @media only screen and (max-width: 500px) {
            margin-top: 0;
          }
          a {
            color: #bbc7cc;
            text-decoration: none;
            font-weight: bold;
          }
          a:hover {
            color: #bbc7cc;
            border-bottom: #bbc7cc 1px solid;
          }
        `}
      >
        <section css={css`float:left;`}>
          &copy; 2018&ndash;{new Date().getFullYear()}{" "}{this.props.author}. 
        </section>
        <section css={css`display:inline;`}>
          Theme based on <a href="https://github.com/TryGhost/Casper">Casper</a>. Powered by <a href="https://www.gatsbyjs.org/">Gatsby</a>.
        </section>
      </footer>
    );
  }
}

export default Footer;
