import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const InternalLink = ({ content, linkId, type, urlSlug }) => {
  let url;

  switch (type) {
    case 'article': {
      url = `/articles/${urlSlug}`;
      break;
    }

    default: {
      url = '/not-found';
    }
  }

  return (
    <Link key={linkId} to={url}>
      {content}
    </Link>
  );
}

InternalLink.propTypes = {
  content: PropTypes.string.isRequired,
  linkId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  urlSlug: PropTypes.string.isRequired
}

export default InternalLink