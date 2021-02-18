import React from "react";
import { css } from "styled-components";

const ArticleDate = ({ date, prefix }) => {
  const useDate = new Date(date);
  return (
    <span>
      {prefix}
      <time
        css={css`
          display: inline-block;
          white-space: nowrap;
          font-size: inherit;
          padding: 0;
          margin: 0;
          border: none;
          @media only screen and (max-width: 500px) {
            display: none;
          }
        `}
        dateTime={useDate.toISOString().split("T")[0]}
      >
        {useDate.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </span>
  );
};

export default ArticleDate;
