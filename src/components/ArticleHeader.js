import { css } from '@emotion/core'
import React from "react"

class ArticleHeader extends React.Component {
  render() {
    const { children } = this.props;
    return <header
      css={css`
        font-size: 5rem
        margin-bottom: 3.4rem;
        @media only screen and (max-width: 500px) {
            margin-bottom: 2rem;
        }
      `}
    >{children}</header>;
  }
}

export default ArticleHeader;
