import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./ArticleCategory.css";

class ArticleCategory extends Component {
  render() {
    const { prefix, category } = this.props;
    if (category) {
      return (
                <span>
          {prefix}
          <span key={category}>
            <Link key={category} to={`/category/${_.kebabCase(category)}`}>
              {category}
            </Link>
          </span>
        </span>
      );
    }
    return null;
  }
}

export default ArticleCategory;
