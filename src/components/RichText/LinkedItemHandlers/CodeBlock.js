import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";
import React from "react";
import styled from "styled-components";

import { Box, Badge } from "@kiwicom/orbit-components";

import Copy from "../../CopyToClipboard";

const StyledPre = styled.pre`
  border-radius: 4px;

  code * {
    font-family: "Roboto Mono", "Liberation Mono", monospace;
  }

  code {
    display: block;
    overflow: auto;
    padding: 0 24px 24px 24px;
  }
`;

const CodeBlock = ({ codeblock }) => {
  const code = codeblock.elements.code.value;
  const language = codeblock.elements.language.value[0].name;
  return (
    <Highlight {...defaultProps} theme={github} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          <Box
            direction="row"
            display="flex"
            justify="between"
            align="center"
            padding="XSmall"
          >
            {language ? <Badge type="infoInverted">{language}</Badge> : <div />}
            <Copy content={code} size="small" />
          </Box>
          <code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </StyledPre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
