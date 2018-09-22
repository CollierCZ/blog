import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./ArticleTags.css";

class ArticleTags extends Component {
  render() {
    const { prefix, tags } = this.props;
    if (tags) {
      let tagArray = tags.split(",");
      return (
                <span>
          {prefix}
          {tagArray.map((tag, index, arr) => (
            <span key={tag}>
              <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
                {tag}
              </Link>
              {index !== arr.length - 1 ? ", " : ""}
            </span>
          ))}
        </span>
      );
    }
    return null;
  }
}

export default ArticleTags;
