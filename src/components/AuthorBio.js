import { css } from '@emotion/core'
import { string } from "prop-types";
import React from "react";

const AuthorBio = ({ bio }) => {
  return <h2 css={css`
    font-size: 1.8rem;
    line-height: 1.5em;
    font-weight: 200;
    color: #50585d;
    letter-spacing: 0;
    text-indent: 0;
    @media only screen and (max-width: 900px) {
      font-size: 1.6rem;
    }
  `}>{bio}</h2>;
}

AuthorBio.propTypes = {
  bio: string.isRequired
}

export default AuthorBio;
