import React from "react";
import { Link } from "gatsby";
import { css } from 'styled-components'
import { useSiteMetadata } from "../hooks/use-metadata";

const BlogLogo = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Link 
      css={css`
        display: block;
        float: left;
        background: none !important; /* Makes sure there is never a background */
        border: none !important; /* Makes sure there is never a border */
        margin-right: 0.5rem;
        border-radius: 3px;
        transition: all ease 0.3s;
      `} to={"/"}>
      <img
        src={siteMetadata.elements.blog_logo.value[0].url}
        alt={siteMetadata.elements.title.value} 
        css={css`
          box-sizing: border-box;
          display: block;
          height: 44px;
          padding: 0;
          width: 44px;
          border-radius: 50%;
          :hover {
            filter: invert(100%);
            transition: 0.5s;
          }
        `}
      />
    </Link>
  )    
}

export default BlogLogo;
