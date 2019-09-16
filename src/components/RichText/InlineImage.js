import PropTypes from 'prop-types'
import React from 'react'

const InlineImage = ({ description, url }) => {
  return (
    <picture>
    <source srcSet={url+'?w=1200&fit=scale'}
            media="(min-width: 1500px)" />
            <source srcSet={url+'?w=1200&fit=scale'}
                    media="(min-width: 720px)" />
        <source srcSet={url+'?w=500&fit=scale'}
                media="(min-width: 400px)" />
        <img
            src={url+'?w=300&fit=scale'}
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