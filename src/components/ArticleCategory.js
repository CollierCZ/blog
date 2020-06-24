import React from "react";
import { navigate } from "gatsby";
import { string } from "prop-types";
import { slugify } from "../utilities/CaseHelpers";
import { TextLink } from "@kiwicom/orbit-components";

const ArticleCategory = ({ prefix, category }) => {
  return (
    <span>
      {prefix}
      <span key={category}>
        <TextLink
          href={`/category/${slugify(category)}`}
          type="secondary"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/category/${slugify(category)}`);
          }}
          stopPropagation
        >
          {category}
        </TextLink>
      </span>
    </span>
  );
};

ArticleCategory.propTypes = {
  prefix: string,
  category: string.isRequired,
};

export default ArticleCategory;
