import { css } from '@emotion/core'
import { Link } from "gatsby";
import React from "react"

class ArticleTeaser extends React.Component {
  render() {
    const { cover, link } = this.props;
    let coverStyle = {backgroundImage: `url(${ cover })`};
    if (link) {
      return <Link to={link}>
          <div 
            css={css`
              background-size: cover;
              width: 100%;
              height: 200px;
              border-radius: 8px 8px 0 0;
            `}
            style={coverStyle}
          />
        </Link>;
    }
    return null;
  }
}

export default ArticleTeaser;
