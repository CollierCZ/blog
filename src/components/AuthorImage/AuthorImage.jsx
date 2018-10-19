import React from "react";
import "./AuthorImage.css";

class AuthorImage extends React.Component {
  render() {
    const name = this.props.author.name.value;
    const image = this.props.author.picture.value[0].url;
    const url = this.props.author.url.value;
    if (image) {
      return (
        <figure className="author-image">
          <a
            className="img"
            href={url}
            style={{ backgroundImage: `url("${image}")` }}
          >
            <span className="hidden">{`${name}'s Picture`}</span>
          </a>
        </figure>
      );
    }
    return null;
  }
}

export default AuthorImage;
