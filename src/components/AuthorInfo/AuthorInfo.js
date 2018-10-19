import React from "react";
import AuthorLink from "../AuthorLink/AuthorLink";
import "./AuthorInfo.css";

class AuthorInfo extends React.Component {
  render() {
    const { prefix } = this.props;
    const id = this.props.author.url.value;
    const name = this.props.author.name.value;
    const image = this.props.author.picture.value[0].url;
    const bio = this.props.author.short_bio.value;
    const authorInfoUrl = prefix ? `${prefix}/${id}` : id;
    if (image) {
      return (
        <React.Fragment>
          <h4>
            <AuthorLink url={authorInfoUrl} name={name} />
          </h4>
          <div className="author-bio" dangerouslySetInnerHTML={{ __html: bio}}>
          </div>
        </React.Fragment>
      );
    }
    return null;
  }
}

export default AuthorInfo;
