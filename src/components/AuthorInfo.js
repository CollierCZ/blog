import { Link } from "gatsby";
import { shape, string } from "prop-types";
import React from "react";

const AuthorInfo = ({author}) => {
  const url = author.url.value;
  const name = author.name.value;
  const bio = author.short_bio.value;
  return (
    <>
      <h4>
        <Link to={"/"+url}>{name}</Link>
      </h4>
      <div className="author-bio" dangerouslySetInnerHTML={{ __html: bio}}>
      </div>
    </>
  );
}

AuthorInfo.propTypes = {
  author: shape({
    name:shape({
      value: string.isRequired
    }).isRequired,
    short_bio:shape({
      value: string.isRequired
    }).isRequired,
    url: shape({
      value: string.isRequired
    }).isRequired
  })
}

export default AuthorInfo;
