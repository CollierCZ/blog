import { css } from '@emotion/core'
import React from "react"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class SocialMediaIcons extends React.Component {
  render() {
    const { urls, } = this.props;
    let icon
    let label
    if (urls && urls.length > 0) {
      return (
        <div
        >
          {urls.map(url => {
            if (url.startsWith('mailto')) {
              icon = faEnvelope
              label = "mailto"
            }
            else if (url.startsWith('https://github')) {
              icon = faGithub
              label = "github"
            }
            else if (url.endsWith('rss.xml')) {
              icon = faRss
              label = "rss"
            }

            return (
            <a
              href={url} 
              aria-label={label} 
              className='icon'
              key={url}
              css={css`
                    display: inline-block;
                    margin: 0 1rem;
                    width: 40px;
                    height: 40px;
                    background-color: white;
                    z-index:2;  
                    transition: all ease 0.3s;
                    border-radius: 50%;

                    :hover {
                      background-color: #000000ff;
                      color: white;
                    }
                    
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
            >
              <FontAwesomeIcon
                icon={icon}
                className="social-media-icon"
                css={css`
                  color: #000000ff;
                  vertical-align: middle;
                  font-size: 1.5em;

                  :hover {
                    color: white;
                  }
                `}
                
              />
            </a>
          )})}
        </div>
      );
    }
    return null;
  }
}

export default SocialMediaIcons;
