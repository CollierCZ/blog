import PropTypes from "prop-types";
import CodeBlock from "./LinkedItemHandlers/CodeBlock"
import Quote from "./LinkedItemHandlers/Quote"
import React from "react";
import Showcase from "./LinkedItemHandlers/Showcase"

const LinkedItem = ({ linkedItem }) => {
  const type = linkedItem.system.type;

  switch (type) {
    case "quote": {
      return (<Quote quote={linkedItem} />)
    }
    case "showcase": {
      return (<Showcase showcase={linkedItem} />)
    }
    case "code_block": {
      return (<CodeBlock codeblock={linkedItem} />)
    }
    default:
      return null;
  }
};

LinkedItem.propTypes = {
  linkedItem: PropTypes.object.isRequired
};

export default LinkedItem;
