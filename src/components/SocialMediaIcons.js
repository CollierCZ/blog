import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'
import { Email, Notification } from '@kiwicom/orbit-components/lib/icons'
import { defaultTokens } from '@kiwicom/orbit-design-tokens'
import styled, { css } from 'styled-components'



const SocialMediaIconLink = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  height: 44px;
  width: 44px;
  background-color: ${defaultTokens.paletteWhite};
  color: ${defaultTokens.paletteInkNormal};
  z-index:2;
  transition: all ease 0.3s;
  border-radius: 50%;

  :hover {
    background-color: ${defaultTokens.paletteInkNormal};
    color: ${defaultTokens.paletteWhite};
  }
  * {
    padding-top: 6px;
  }
`

const SocialMediaIcons = ({urls}) => {
  let icon
  let label
  return (
    <div css={css`
    display:flex;
    `}>
      {urls.map(url => {
        if (url.startsWith('mailto')) {
          label = 'mailto'
          icon = <Email size='large'/>
        }
        else if (url.startsWith('https://github')) {
          label = "github"
          icon = <FontAwesomeIcon
          icon={faGithub}
          className="social-media-icon"
          css={css`
          width: 32px !important;
          height: 32px;
          `}
        />
        }
        else if (url.endsWith('rss.xml')) {
          label = "rss"
          icon = <Notification size='large'/>
        }

        return (
          <SocialMediaIconLink
          href={url} 
          aria-label={label} 
          className='icon'
          key={url}
        >
          {icon}
        </SocialMediaIconLink>
      )})}
    </div>
  );
}



SocialMediaIcons.propTypes = {
  urls: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};


export default SocialMediaIcons;
