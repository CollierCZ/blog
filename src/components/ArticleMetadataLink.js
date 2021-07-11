import React from "react";
import { navigate } from "gatsby";
import { oneOf, string } from "prop-types";
import { slugify } from "../utilities/CaseHelpers";
import { TextLink } from "@kiwicom/orbit-components";

const ArticleMetadataLink = ({ target, type }) => {
  const location = type === "tag" ? "tags" : "category";
  return (
    <TextLink
      href={`/${location}/${slugify(target)}`}
      type="secondary"
      onClick={(event) => {
        event.preventDefault();
        navigate(`/${location}/${slugify(target)}`);
      }}
      stopPropagation
    >
      {target}
    </TextLink>
  );
};

ArticleMetadataLink.propTypes = {
  target: string.isRequired,
  type: oneOf(["category", "tag"]),
};

export default ArticleMetadataLink;
