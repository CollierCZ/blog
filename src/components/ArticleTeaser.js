import { css } from '@emotion/core'
import { Link } from "gatsby";
import { string } from "prop-types";
import React from "react"

const ArticleTeaser = ({ cover, link }) => {
  return <Link to={link}>
      <div 
        css={css`
          background-size: cover;
          width: 100%;
          height: 200px;
          border-radius: 8px 8px 0 0;
          background-image: url("${ cover }");
        `}
      />
    </Link>;
}

ArticleTeaser.propTypes = {
  cover: string.isRequired,
  link: string.isRequired
}

export default ArticleTeaser;
