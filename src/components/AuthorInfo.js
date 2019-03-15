import React from "react"
import { Link } from "gatsby";

class AuthorInfo extends React.Component {
  render() {
    const url = this.props.author.url.value;
    const name = this.props.author.name.value;
    const image = this.props.author.picture.value[0].url;
    const bio = this.props.author.short_bio.value;
    if (image) {
      return (
        <>
          <h4>
            <Link to={"/"+url}>{name}</Link>
          </h4>
          <div className="author-bio" dangerouslySetInnerHTML={{ __html: bio}}>
          </div>
        </>
      );
    }
    return null;
  }
}

export default AuthorInfo;
