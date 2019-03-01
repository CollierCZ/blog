import { css } from '@emotion/core'
import React from "react"
import { SocialIcon } from "react-social-icons"

class SocialMediaIcons extends React.Component {
  render() {
    const { urls, color } = this.props;
    if (urls && urls.length > 0) {
      return (
        <div
          css={css`
            text-align: left;
            margin: 0;
            .social-svg {
              text-align: center;
              color: rgb(255, 255, 255, 0.8);
            }
            .social-svg:hover {
              color: #bbc7cc;
              background: white;
            }
          `}
        >
          {urls.map(url => (
            <SocialIcon
              key={url}
              className="social-media-icon"
              url={url}
              color={color}
              style={{ height: null, width: null }}
              css={css`
                display: inline-block;
                margin: 0 1rem;
                width: 40px;
                height: 40px;
                z-index:2;  
                transition: all ease 0.3s;
                
                @media only screen and (max-width: 900px) {
                  display: inline-block;
                  width: 35px;
                  height: 35px;
                }
                @media only screen and (max-width: 500px) {
                  margin: 1rem;
                  display: inline-block;
                  width: 30px;
                  height: 30px;
                }
              `}
            />
          ))}
        </div>
      );
    }
    return null;
  }
}

export default SocialMediaIcons;
