import { css } from "@emotion/core";
import { array, arrayOf, shape, string } from "prop-types";
import React from "react";
import RichText from "../RichText"

const Showcase = ({showcase}) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {showcase.elements.items.linked_items.map(showcaseItem => {
      return (
        <ShowcaseItem key={showcaseItem.fields.slug} showcaseItem={showcaseItem} />
      )
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
      resolvedData: shape ({
        html: string.isRequired
      }).isRequired,
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
}

Showcase.propTypes = {
  showcase: shape({
    elements: shape ({
      items: shape ({
        linked_items: arrayOf(
          shape(showcaseItemProps).isRequired
        ).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

const ShowcaseItem = ({showcaseItem}) => {
  const item = showcaseItem.elements;
  return(
    <div 
    css={css`
      flex:1 1 300px;
      margin:3rem;
      padding: 1rem;
      border-radius:4%;
      box-shadow: 0rem 0rem 2rem grey;
      transition: all .5s ease;
      text-decoration: none;
      :hover {
        color: inherit !important;
        font-weight: inherit !important;
        letter-spacing: inherit !important;
        transition: all .5s ease;
        transform: translate3D(0,-1px,0) scale(1.02);
      }
    `}>
      <a
        href={item.link.value}  
      >
        <h2
          css={css`
            text-align: center;
            font-size: 2.5rem;
            text-decoration: none;
          `}
        >{item.name.value}</h2>
        <div 
          css={css`
            background-size: cover;
            width: 100%;
            height: 200px;
            background-image: url(${ item.teaser.value[0].url });
          `}
        />
      </a>
      <RichText
        content={item.short_description.resolvedData.html}
        links={item.short_description.links}
      />
    </div>
  )
}

ShowcaseItem.propTypes = {
  showcaseItem: shape(showcaseItemProps).isRequired
};

export default Showcase;