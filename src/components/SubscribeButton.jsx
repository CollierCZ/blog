import { css } from '@emotion/core'
import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

class SubscribeButton extends React.Component {
  render() {
    return (
      <Link
        className="icon"
        css={css`
          box-sizing: border-box;
          display: block;
          float: right;
          height: 40px;
          width: 40px;
          margin: 0 1rem;
          color: #111;
          text-align: center;
          text-decoration: none;
          border-radius: 50%;
          background: #fff;
          transition: all ease 0.3s;
          :hover {
            background-color: #000000ff;
            color: #white;
          }

          @media only screen and (max-width: 900px) {
            width: 35px;
            height: 35px;
          }
          @media only screen and (max-width: 500px) {
            margin: 1rem;
            height: 30px;
            width: 30px;
          }
        `}
      to="/rss.xml">
        <FontAwesomeIcon icon={faRss} 
          css={css`
            vertical-align: middle;
            font-size: 1.5em;
            :hover {
              color: white;
            }
          `}
        />
        <span className="sr-only">Subscribe</span>
      </Link>
    );
  }
}

export default SubscribeButton;
