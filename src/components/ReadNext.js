import { css } from '@emotion/core'
import React, { Component } from "react"
import classNames from "classnames"
import Link from "gatsby-link"

const ReadNextStory = props => {
  const { article, text } = props;
  if (article) {
    const { path, cover, title, excerpt } = article;
    const classes = classNames("read-next-story", props.className);
    return (
      <Link className={classes} 
        to={path}
        css={css`
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 1;
          -webkit-flex-grow: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          min-width: 50%;
          text-decoration: none;
          position: relative;
          text-align: center;
          color: #fff;
          background: #222 no-repeat center center;
          background-size: cover;
          overflow: hidden;
          ${cover ? `background-image: url(${cover});` : null}
          :hover::before {
            background: rgba(0, 0, 0, 0.8);
            transition: all 0.2s ease;
          }
          :hover article::before {
            color: #222;
            background: #fff;
            transition: all 0.2s ease;
          }
          /*darken the image */
          ::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            transition: all 0.5s ease;
        }
        `}
      >
        <article 
          css={css`
            position: relative;
            width: 80%;
            max-width: 710px;
            margin: 4rem auto;
            padding-bottom: 4rem;
            word-wrap: break-word;
            @media only screen and (max-width: 500px) {
              font-size: 0.95em;
            }
            @media only screen and (max-width: 500px) {
                width: 100%;
                margin: 2rem 16px;
                padding-bottom: 2rem;
                line-height: 1.65em;
            }
            ::before {
              content: "${text}";
              padding: 4px 10px 5px;
              text-transform: uppercase;
              font-size: 1.1rem;
              font-family: "Open Sans", sans-serif;
              color: rgba(255, 255, 255, 0.8);
              border: rgba(255, 255, 255, 0.5) 1px solid;
              border-radius: 4px;
              transition: all 0.5s ease;
            }
          `}
        >
          <h2
            css={css`
              margin-top: 1rem;
              color: #fff;
            `}
          >{title}</h2>
          <p
            css={css`
              margin: 0;
              color: rgba(255, 255, 255 0.8);
              @media only screen and (max-width: 500px) {
                display:none;
              }
            `}
          >{excerpt}&hellip;</p>
        </article>
      </Link>
    );
  }
  return null;
};

/**
 * Links to Previous/Next articles
 */
class ReadNext extends Component {
  render() {
    const { next, prev } = this.props;
    return (
      <aside
        css={css`
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: stretch;
          -webkit-align-items: stretch;
          -ms-flex-align: stretch;
          align-items: stretch;
          margin-top: 10rem;
          @media only screen and (max-width: 900px) {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-top: 4rem;
          }
          @media only screen and (max-width: 500px) {
            margin-top: 2rem;
            margin-bottom: 0.5rem;
          }
        `}
      >
        <ReadNextStory text="Read This Next" article={next} />
        <ReadNextStory text="You Might Enjoy" article={prev} />
      </aside>
    );
  }
}

export default ReadNext;
