import parseHTML, { domToReact } from "html-react-parser";
import InlineImage from "./InlineImage";
import LinkedItem from "./LinkedItem";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {
  Heading,
  List,
  ListItem,
  Text,
  TextLink
} from "@kiwicom/orbit-components";

const RichText = ({ content, images, links, linkedItems }) => {
  if (!content || !content.length) {
    return null;
  }
  // Parse HTML as React components, replacing any content items.
  const children = parseHTML(content, {
    replace: domNode => replaceNode(domNode, images, links, linkedItems)
  });

  return <>{children}</>;
};

const replaceLists = {
  replace: ({ attribs, children, name }) => {
    if (name === "ul") {
      return (
        <List spaceAfter={"small"}>{domToReact(children, replaceLists)}</List>
      );
    }
    if (name === "li") {
      const content = children || null;
      return (
        <ListItem spaceAfter={"smallest"}>
          {domToReact(content, replaceLists)}
        </ListItem>
      );
    }

    if (name === "a") {
      return replaceLinks(attribs, children);
    }
  }
};

const replaceLinks = (attribs, children, links) => {
  // Replace internal links
  if (attribs["data-item-id"]) {
    const id = attribs["data-item-id"] || null;
    const link = links.find(link => link.link_id === id);
    const url = `/articles/${link.url_slug}`;
    return (
      <TextLink
        href={url}
        onClick={event => {
          event.preventDefault();
          navigate(url);
        }}
        key={url}
      >
        {children[0].data}
      </TextLink>
    );
  }

  //Replace external links
  const url = attribs["href"] || null;
  return (
    <TextLink href={url} key={url}>
      {children[0].data}
    </TextLink>
  );
};

RichText.propTypes = {
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(PropTypes.object),
  linkedItems: PropTypes.arrayOf(PropTypes.object)
};

export default RichText;

/** Replace HTML DOM node with React component. */
function replaceNode(domNode, images, links, linkedItems) {
  const { attribs, children, name } = domNode;
  let content = [];
  // Replace inline assets.
  if (name === "figure") {
    const id = attribs["data-asset-id"] || null;
    const image = images.find(image => image.image_id === id);
    return <InlineImage description={image.description} url={image.url} />;
  }

  // Replace inline linked items and components.
  if (attribs && attribs["data-type"] === "item") {
    const codename = attribs["data-codename"] || null;
    const linkedItem = linkedItems.find(
      item => item.system.codename === codename
    );
    return <LinkedItem linkedItem={linkedItem} />;
  }

  // Replace paragraphs.
  if (domNode.name === "p") {
    children.forEach(node => {
      if (node.name === "a") {
        content.push(replaceLinks(node.attribs, node.children, links));
      }
      if (node.type === "text") {
        content.push(node.data);
      }
      return "hi";
    });
    return <Text spaceAfter={"small"}>{content}</Text>;
  }

  // Replace headings.
  const headings = ["h2", "h3", "h4", "h5", "h6"];
  if (headings.indexOf(name) > -1) {
    return (
      <Heading
        element={name}
        type={"title" + name.slice(1)}
        spaceAfter={"small"}
      >
        {domToReact(children)}
      </Heading>
    );
  }

  // Recursively replace unordered lists.
  if (name === "ul") {
    return (
      <List spaceAfter={"small"}>{domToReact(children, replaceLists)}</List>
    );
  }
}
