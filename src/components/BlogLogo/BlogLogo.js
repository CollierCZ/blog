import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "./BlogLogo.css";

const BlogLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      kenticoCloudItemHome{
        elements {
          title {
            value
          }
          blog_logo {
            assets {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Link className="blog-logo" to={"/"}>
      {/* style={{ boxShadow: "none" }}> */}
      <img src={data.kenticoCloudItemHome.elements.blog_logo.assets[0].url} alt={data.kenticoCloudItemHome.elements.title.value} />
    </Link>
  )    
}

export default BlogLogo;
