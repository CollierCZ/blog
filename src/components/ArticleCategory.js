import React, { Component } from "react"
import { Link } from "gatsby"
import { slugify } from "../utilities/slugify"

class ArticleCategory extends Component {
  render() {
    const { prefix, category } = this.props;
    if (category) {
      return (
                <span>
          {prefix}
          <span key={category}>
            <Link key={category} to={`/category/${slugify(category)}`}>
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
