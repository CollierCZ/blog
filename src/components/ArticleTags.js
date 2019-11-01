import React from "react";
import { Link } from "gatsby";
import { arrayOf, string } from "prop-types";
import { slugify } from "../utilities/slugify";

const ArticleTags = ({ prefix, tags }) => {
  return (
            <span>
      {prefix}
      {tags.map((tag, index, arr) => (
        <span key={tag}>
          <Link key={tag} to={`/tags/${slugify(tag)}`}>
            {tag}
          </Link>
          {index !== arr.length - 1 ? ", " : ""}
        </span>
      ))}
    </span>
  );
}

ArticleTags.propTypes ={
  prefix: string,
  tags: arrayOf (
    string.isRequired
  ).isRequired
}

export default ArticleTags;
