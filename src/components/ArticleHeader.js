import { css } from 'styled-components'
import React from "react"

const ArticleHeader = ({children}) => {
  return <header
    css={css`
      margin-bottom: 16px;
    `}
  >{children}</header>;
}

export default ArticleHeader;
