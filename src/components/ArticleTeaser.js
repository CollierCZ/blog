import { css } from 'styled-components'
import { string } from "prop-types";
import React from "react"

const ArticleTeaser = ({ cover }) => {
  return (
    <div 
      css={css`
        width: 100%;
        height: 200px;
        background: url("${ cover }") center center no-repeat;
      `}
  />);
}

ArticleTeaser.propTypes = {
  cover: string.isRequired
}

export default ArticleTeaser;
