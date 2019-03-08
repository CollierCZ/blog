import PropTypes from 'prop-types'
import React from 'react'

const InlineImage = ({ description, url }) => {
  return (
    <picture>
        <source srcSet={url}
                media="(min-width: 900px)" />
        <source srcSet={url+'?h=0.5&w=0.5&fit=scale'}
                media="(min-width: 500px)" />
        <img
            src={url+'?h=0.25&w=0.25&fit=scale'}
            alt={description}
        />
    </picture>
  )
}

InlineImage.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default InlineImage