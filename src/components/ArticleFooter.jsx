import React from "react"
import { css } from 'styled-components'

const ArticleFooter = ({children}) => {
  return <footer
    css={css`
      position: relative;
      margin: 6rem 0 0;
      padding: 3rem 0 0;
      border-top: #ebf2f6 1px solid;
    `}
  >{children}</footer>;
}

export default ArticleFooter;
