import { css } from '@emotion/core'
import React from "react"
import { Link } from "gatsby"

class SubscribeButton extends React.Component {
  render() {
    return (
      <Link
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
            color: #ffffffff;
          }
          ::before {
            font-size: 21px;
            line-height: 1.9;
          }

          @media only screen and (max-width: 900px) {
            width: 35px;
            height: 35px;
            ::before {
              font-size: 17px;
              line-height: 2;
            }
          }
          @media only screen and (max-width: 500px) {
            margin: 1rem;
            height: 30px;
            width: 30px;
            ::before {
              font-size: 14px;
            }
            :hover {
            background-color: #000000ff;
            }
          }
        `}
      className="subscribe-button icon-feed" to="/rss.xml">
        <span className="sr-only">Subscribe</span>
      </Link>
    );
  }
}

export default SubscribeButton;
