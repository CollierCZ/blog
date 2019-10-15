import { css } from '@emotion/core'
import { Link } from 'gatsby'
import React from 'react'

class AuthorImage extends React.Component {
  render() {
    const name = this.props.author.name.value;
    const image = this.props.author.picture.value[0].url+'?w=100&h=100';
    const url = this.props.author.url ? this.props.author.url.value : '';
    if (image && url) {
      return (
        <figure 
        css={css`
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          position: absolute;
          top: -40px;
          left: 50%;
          margin-left: -40px;
          width: 80px;
          height: 80px;
          border-radius: 100%;
          overflow: hidden;
          padding: 6px;
          background: #fff;
          box-shadow: #e7eef2 0 0 0 1px;
          @media only screen and (max-width: 500px) {
            top: -60px;
          }
        `}>
          <Link
            className="img"
            css={css`
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              background-size: cover;
              background-position: center center;
              border-radius: 100%;
              background-image: url("${image}");
            `}
            to={"/"+url}
          >
            <span className="sr-only">{`${name}'s Picture`}</span>
          </Link>
        </figure>
      );
    }
    if (image) {
      return (
        <figure 
        css={css`
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width: 80px;
          height: 80px;
          margin: 0 0 1rem 0;
          border-radius: 100%;
          overflow: hidden;
          background: #fff;
          box-shadow: #e7eef2 0 0 0 1px;
          @media only screen and (max-width: 500px) {
            top: -60px;
          }
        `}>
          <img
            src={image} alt={name+"'s Picture"}
            css={css`
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              background-size: cover;
              background-position: center center;
              border-radius: 100%;  
            `}
          />
        </figure>
      )
    }
    return null;
  }
}

export default AuthorImage;
