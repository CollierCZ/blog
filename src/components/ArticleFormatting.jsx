import React from "react"
import { css } from 'styled-components'

const ArticleFormatting = ({ children, className }) => {
  return <article 
    className={className}
    css={css`
      position: relative;
      width: 80%;
      max-width: 80ch;
      margin: 0 auto 4rem auto;
      padding-bottom: 0;
      border: none;
      word-wrap: break-word;
      @media only screen and (max-width: 900px) {
        font-size: 0.95em;
      }
      @media only screen and (max-width: 500px) {
        width: auto;
        margin: 2rem 16px;
        padding-bottom: 2rem;
        line-height: 1.65em;
      }
    `}
  >
    {children}
  </article>;
}

export default ArticleFormatting;
