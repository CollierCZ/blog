import React from "react";
import { navigate } from "gatsby";
import { arrayOf, string } from "prop-types";
import { slugify } from "../utilities/CaseHelpers";
import { TextLink } from "@kiwicom/orbit-components";

const ArticleTags = ({ prefix, tags }) => {
  return (
    <span>
      {prefix}
      {tags.map((tag, index, arr) => (
        <span key={tag}>
          {" "}
          <TextLink
            href={`/tags/${slugify(tag)}`}
            type="secondary"
            onClick={(event) => {
              event.preventDefault();
              navigate(`/tags/${slugify(tag)}`);
            }}
            stopPropagation
          >
            {tag}
          </TextLink>
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
