import { shape, string } from "prop-types";
import React from "react";
import { navigate } from "gatsby";
import { Heading, TextLink } from "@kiwicom/orbit-components";
import RichText from "./RichText/RichText";

const AuthorInfo = ({ author }) => {
  const url = author.url.value;
  const name = author.name.value;
  const bio = author.short_bio.value;
  return (
    <>
      <Heading element="h4" type="title4" spaceAfter="small">
        <TextLink
          type="secondary"
          href={"/" + url}
          onClick={event => {
            event.preventDefault();
            navigate("/" + url);
          }}
        >
          {name}
        </TextLink>
      </Heading>
      <RichText content={bio} />
    </>
  );
};

AuthorInfo.propTypes = {
  author: shape({
    name: shape({
      value: string.isRequired
    }).isRequired,
    short_bio: shape({
      value: string.isRequired
    }).isRequired,
    url: shape({
      value: string.isRequired
    }).isRequired
  })
};

export default AuthorInfo;
