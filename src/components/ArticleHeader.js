import { css } from '@emotion/core'
import React from "react"

const ArticleHeader = ({children}) => {
  return <header
    css={css`
      margin-bottom: 3.4rem;
      @media only screen and (max-width: 500px) {
          margin-bottom: 2rem;
      }
    `}
  >{children}</header>;
}

export default ArticleHeader;
