import PropTypes from 'prop-types'
import React from 'react'

const InlineImage = ({ description, url }) => {
  return (
    <picture>
    <source srcSet={url}
            media="(min-width: 1200px)" />
            <source srcSet={url+'?w=720&fit=scale'}
                    media="(min-width: 900px)" />
        <source srcSet={url+'?w=500&fit=scale'}
                media="(min-width: 500px)" />
        <img
            src={url+'?w=320&fit=scale'}
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