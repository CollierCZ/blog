import { css } from "styled-components";
import { Chat } from "@kiwicom/orbit-components/lib/icons";
import { Text } from "@kiwicom/orbit-components";
import PropTypes from "prop-types";
import React from "react";
import parseHTML, { domToReact } from "html-react-parser";

const Quote = ({ quote }) => {
  const source = quote.elements.source.value
    ? `<footer class="source">${quote.elements.source.value}</footer>`
    : "";
  const parseSource = {
    replace: ({ attribs, children, name, type }) => {
      if (type === "tag") {
        if (name === "em") {
          return <cite>{domToReact(children, parseSource)}</cite>;
        }
      }
      if (!attribs) return;
      if (attribs.class === "source") {
        return (
          <footer>
            <Text element="div" type="secondary">
              {domToReact(children, parseSource)}
            </Text>
          </footer>
        );
      }
    }
  };
  const parseQuote = {
    replace: ({ children, name, type }) => {
      if (type === "tag") {
        if (name === "p") {
          return <Text>{domToReact(children, parseQuote)}</Text>;
        }
      }
    }
  };
  const quoteText = parseHTML(
    quote.elements.quote.value,
    parseQuote
  );
  const sourceText = parseHTML(source, parseSource);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Chat size="large" />
      <blockquote>
        {quoteText}
        {sourceText}
      </blockquote>
    </div>
  );
};

export default Quote;

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};
