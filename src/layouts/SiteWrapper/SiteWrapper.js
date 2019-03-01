import React from "react"
import { css } from '@emotion/core'

class SiteWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="site-wrapper"
      css={css`
        position: relative;
        z-index: 10;
        min-height: 100%;
        background: #fff;
        -webkit-transition: -webkit-transform 0.5s ease;
        transition: transform 0.5s ease;
      `} 
    >
      {children}
      </div>;
  }
}

export default SiteWrapper;