import PropTypes from 'prop-types'
import React from 'react'

const LinkedItem = ({ linkedItem }) => {
  const type = linkedItem.system.type
  
  switch (type) {
    case 'code_block': {
      return <p codeblock={linkedItem} />;
    }

    default:
      return null;
  }
}

LinkedItem.propTypes = {
  linkedItem: PropTypes.object.isRequired
}

export default LinkedItem