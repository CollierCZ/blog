import React from "react";
import { arrayOf, string } from "prop-types";

import ArticleMetadataLink from "./ArticleMetadataLink";

const ArticleTags = ({ prefix, tags }) => {
  return (
    <span>
      {prefix}
      {tags.map((tag, index, arr) => (
        <span key={tag}>
          {" "}
          <ArticleMetadataLink target={tag} type="tag" />
          {index !== arr.length - 1 ? ", " : ""}
        </span>
      ))}
    </span>
  );
};

ArticleTags.propTypes = {
  prefix: string,
  tags: arrayOf(string.isRequired).isRequired,
};

export default ArticleTags;
