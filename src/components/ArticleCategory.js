import React from "react"
import { Link } from "gatsby"
import { string } from "prop-types";
import { slugify } from "../utilities/slugify"

const ArticleCategory = ({ prefix, category }) => {
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

ArticleCategory.propTypes ={
  prefix: string,
  category: string.isRequired
}

export default ArticleCategory;
