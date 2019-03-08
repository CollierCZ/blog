import parseHTML from 'html-react-parser'
import get from 'lodash/get'
import InlineImage from './InlineImage'
import InternalLink from './InternalLink'
import LinkedItem from './LinkedItem'
import PropTypes from 'prop-types'
import React from 'react'

const RichText = ({ content, images, links, linkedItems }) => {
    if (!content || !content.length) {
        return null;
      }
    // Parse HTML as React components, replacing any content items.
    const children = parseHTML(content, {
        replace: domNode => replaceNode(domNode, images, links, linkedItems),
    });

    return <>{children}</>;
};

RichText.propTypes = {
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  linkedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RichText;

/** Replace HTML DOM node with React component. */
function replaceNode(domNode, images, links, linkedItems) {
  // Replace inline assets.
if (domNode.name === "figure") {
    const id = get(domNode, 'attribs["data-asset-id"]') || null
    const image = images.find(image => image.imageId === id)

return (
  <InlineImage
        description={image.description}
        url={image.url}
      />
    );
  }

  // Replace internal links.
if (domNode.name === 'a' && domNode.attribs['data-item-id']) {
    const content = get(domNode, 'children[0].data') || null
    const id = get(domNode, 'attribs["data-item-id"]') || null
    const link = links.find(link => link.linkId === id);

return (
    <InternalLink
        content={content}
        linkId={link.linkId}
        type={link.type}
        urlSlug={link.urlSlug}
      />
    );
  }

  // Replace inline linked items.
if (domNode.name === 'object' && domNode.attribs['data-rel'] === 'link') {
    const codename = get(domNode, 'attribs["data-codename"]') || null
    const linkedItem = linkedItems.find(item => item.system.codename === codename)

    return <LinkedItem linkedItem={linkedItem} />;
  }
}