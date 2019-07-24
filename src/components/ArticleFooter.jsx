import React from "react"
import { css } from '@emotion/core'

class ArticleFooter extends React.Component {
  render() {
    const { children } = this.props;

    return <footer
      className="article-footer"
      css={css`
        position: relative;
        margin: 6rem 0 0;
        padding: 3rem 0 0;
        border-top: #ebf2f6 1px solid;
        @media only screen and (max-width: 500px) {
          padding: 5rem 0 3rem;
          text-align: center;
        }

        h4 {
          font-size: 2rem;
          margin: 0;
        }
      
        p {
          margin: 1rem 0;
          font-size: 1.8rem;
          line-height: 1.75em;
        }
    
        h4 a {
          color: #2e2e2e;
          text-decoration: none;
        }
    
        h4 a:hover {
          text-decoration: underline;
        }
      `}
    >{children}</footer>;
  }
}

export default ArticleFooter;
