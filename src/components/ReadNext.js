import { css } from "styled-components";
import React from "react";
import { shape, string } from "prop-types";
import Link from "gatsby-link";

import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";

export const ReadNextStory = ({ article, text }) => {
  const { path, cover, title, excerpt } = article;
  return (
    <Link
      className="read-next-story"
      to={path}
      css={css`
        display: flex;
        flex-grow: 1;
        min-width: 50%;
        text-decoration: none;
        position: relative;
        background: #222 no-repeat center center;
        background-size: cover;
        overflow: hidden;
        ${cover ? `background-image: url(${cover});` : null} :hover::before {
          background: rgba(0, 0, 0, 0.8);
          transition: all 0.2s ease;
        }

        /*darken the image */
        ::before {
          content: \"\";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.7);
          transition: all 0.5s ease;
        }
      `}
    >
      <article
        css={css`
          position: relative;
          width: 80%;
          max-width: 710px;
          margin: 52px auto;
        `}
      >
        <Stack align="center" direction="column">
        <Heading inverted element="h2" type="title3" spaceAfter="small">
            {text}
          </Heading>
          <Heading inverted element="h3" spaceAfter="small">
            {title}
          </Heading>
          <Text align="center" type="white">
            {excerpt}
          </Text>
        </Stack>
      </article>
    </Link>
  );
};

const articleProps = {
  path: string.isRequired,
  cover: string,
  title: string.isRequired,
  excerpt: string.isRequired,
};

ReadNextStory.propTypes = {
  article: shape(articleProps).isRequired,
  text: string.isRequired,
};

/**
 * Links to Previous/Next articles
 */
const ReadNext = ({ next, prev }) => {
  return (
    <aside
      css={css`
        display: flex;
        align-items: stretch;
        margin-top: 32px;
        @media only screen and (max-width: 900px) {
          flex-direction: column;
        }
      `}
    >
      <ReadNextStory text="Read This Next" article={next} />
      <ReadNextStory text="You Might Enjoy" article={prev} />
    </aside>
  );
};

ReadNext.propTypes = {
  next: shape(articleProps).isRequired,
  prev: shape(articleProps).isRequired,
};

export default ReadNext;
