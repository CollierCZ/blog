import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { number, string } from "prop-types";
import React from 'react'

const PaginationLink = ({age, text, url}) => {
  if (url) {
    var side
    if (age === "new") {
      side = "left"
    }
    if (age === "old") {
      side = "right"
    }
    var linkUrl
    if (url === 1) {
      linkUrl = ""
    }
    else {
      linkUrl = url.toString()
    }

    return (
      <Link
        to={"/"+linkUrl}
        css={css`
          position: absolute;
          display: inline-block;
          padding: 0 15px;
          border: #bfc8cd 1px solid;
          text-decoration: none;
          border-radius: 4px;
          transition: border 0.3s ease;
          ${side}: 0;
          :hover {
            color: #889093;
            border-color: #98a0a4;
          }
          @media only screen and (max-width: 500px) {
            position: static;
            margin: 0.5rem 0;
          }
        `}
      >
        {text}
      </Link>
    );
  }
  return null;
}

PaginationLink.propTypes = {
  age: string.isRequired,
  text: string.isRequired,
  url: number
}

export default PaginationLink;
