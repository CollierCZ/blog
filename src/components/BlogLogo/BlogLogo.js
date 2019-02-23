import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import "./BlogLogo.css";

const BlogLogo = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render = {data => {
      return (
        <Link className="blog-logo" to={"/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={data.kenticoCloudItemHome.elements.blog_logo.assets[0].url} alt={data.kenticoCloudItemHome.elements.title.value} />
        </Link>
      )
    }
  }
  />
)

export default BlogLogo;
