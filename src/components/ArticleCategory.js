import React from "react";
import { string } from "prop-types";

import ArticleMetadataLink from "./ArticleMetadataLink";

const ArticleCategory = ({ prefix, category }) => {
  return (
    <span>
      {prefix}
      <span key={category}>
        <ArticleMetadataLink target={category} type="category" />
      </span>
    </span>
  );
};

ArticleCategory.propTypes = {
  prefix: string,
  category: string.isRequired,
};

export default ArticleCategory;
