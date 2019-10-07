import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { css } from '@emotion/core'

const BlogLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      kenticoCloudItemHome{
        ...MetadataFragment
      }
    }
  `)
  return (
    <Link 
      css={css`
        display: block;
        float: left;
        background: none !important; /* Makes sure there is never a background */
        border: none !important; /* Makes sure there is never a border */
        margin-right: 1rem;
        border-radius: 3px;
        transition: all ease 0.3s;
        @media only screen and (max-width: 500px) {
          margin: 1rem;
        }
      `} to={"/"}>
      <img
        src={data.kenticoCloudItemHome.elements.blog_logo.assets[0].url}
        alt={data.kenticoCloudItemHome.elements.title.value} 
        css={css`
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          height: 40px;
          padding: 0;
          width: 40px;
          border-radius: 50%;
          :hover {
            filter: invert(100%);
            transition: 0.5s;
          }
          @media only screen and (max-width: 900px) {
            height: 35px;
            width: 35px;
          }
          @media only screen and (max-width: 500px) {
            height: 30px;
            width: 30px;
          }
        `}
      />
    </Link>
  )    
}

export default BlogLogo;
