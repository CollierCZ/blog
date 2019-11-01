import { css } from '@emotion/core'
import React from "react";
import PaginationLink from "./PaginationLink";

const Pagination = ({page, pages, prev, next}) => {
  return (
    <nav 
      css={css`
        position: relative;
        width: 80%;
        max-width: 710px;
        margin: 2rem auto;
        font-family: "Open Sans", sans-serif;
        font-size: 1.3rem;
        color: #4a4a4a;
        text-align: center;
        a {
          color: #4a4a4a;
          transition: all 0.2s ease;
        }
        @media only screen and (max-width: 500px) {
          width: auto;
          margin: 2rem auto;
        }
      `}
    >
      <PaginationLink
        age="new"
        url={prev}
        text="← Newer Articles"
      />
      <span
        css={css`
          display: inline-block;
          padding: 2px 0;
          min-width: 100px;
          @media only screen and (max-width: 500px) {
            display: block;
          }
        `}
      >
        Page {page} of {pages}
      </span>
      <PaginationLink
        age="old"
        url={next}
        text="Older Articles →"
      />
    </nav>
  );
}

export default Pagination;
