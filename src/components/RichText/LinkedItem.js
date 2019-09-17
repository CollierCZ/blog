import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React from "react";

const LinkedItem = ({ linkedItem }) => {
  const type = linkedItem.system.type;

  switch (type) {
    case "quote": {
      const source = linkedItem.elements.source.resolvedHtml
        ? `<footer>${linkedItem.elements.source.resolvedHtml}</footer>`
        : "";
      const quote = source
        ? linkedItem.elements.quote.resolvedHtml + source
        : linkedItem.elements.quote.resolvedHtml;
      return (
        <div
          css={css`
            display: flex;
            svg {
              font-size: 5rem;
            }
            footer {
              font-size: 2rem;
            }
          `}
        >
          <FontAwesomeIcon icon={faQuoteLeft} />
          <blockquote
            dangerouslySetInnerHTML={{ __html: quote }}
            css={css`
              font-style: normal;
              margin: 0 3rem;
            `}
          />
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      );
    }

    default:
      return null;
  }
};

LinkedItem.propTypes = {
  linkedItem: PropTypes.object.isRequired
};

export default LinkedItem;
