import { css } from "styled-components";
import { array, arrayOf, shape, string } from "prop-types";
import React from "react";
import RichText from "../RichText";
import { Heading, Stack, Tile } from "@kiwicom/orbit-components";

const Showcase = ({ showcase }) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {showcase.elements.items.value.map(showcaseItem => {
      return (
        <ShowcaseItem
          key={showcaseItem.fields.slug}
          showcaseItem={showcaseItem}
        />
      );
    })}
  </div>
);

const showcaseItemProps = {
  fields: shape({
    slug: string.isRequired
  }).isRequired,
  elements: shape({
    name: shape({
      value: string.isRequired
    }).isRequired,
    short_description: shape({
      value: string.isRequired,
      links: array.isRequired
    }).isRequired,
    teaser: shape({
      value: arrayOf(
        shape({
          url: string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired,
    link: shape({
      value: string
    })
  }).isRequired
};

Showcase.propTypes = {
  showcase: shape({
    elements: shape({
      items: shape({
        value: arrayOf(shape(showcaseItemProps).isRequired).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

const ShowcaseItem = ({ showcaseItem }) => {
  const item = showcaseItem.elements;
  return (
    <div
      css={css`
        flex: 1 1 34ch;
        margin: 16px;
        > * {
          width: 100%;
          height: 100%;
        }
      `}
    >
      <Tile
        onClick={() => {
          window.location.assign(item.link.value);
        }}
      >
        <Stack>
          <Heading elment="h2">{item.name.value}</Heading>
          <div
            css={css`
              background-size: cover;
              width: 100%;
              height: 200px;
              background-image: url(${item.teaser.value[0].url});
            `}
          />
          <RichText
            content={item.short_description.value}
            links={item.short_description.links}
          />
        </Stack>
      </Tile>
    </div>
  );
};

ShowcaseItem.propTypes = {
  showcaseItem: shape(showcaseItemProps).isRequired
};

export default Showcase;
