import React from "react";
import { Link } from "gatsby";
import "./AuthorInfo.css";
import AuthorMeta from "../AuthorMeta/AuthorMeta";
import AuthorLink from "../AuthorLink/AuthorLink";

const Bio = props => {
  const { bio, moreArticlesUrl } = props;
  if (bio) {
    return <div dangerouslySetInnerHTML={{ __html: bio}} />;
  }
  return (
    <p>
      Read <Link to={moreArticlesUrl}>more articles</Link> by this author.
    </p>
  );
};

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
        <section className="author">
          <h4>
            <AuthorLink url={authorInfoUrl} name={name} />
          </h4>
          <Bio bio={bio} moreArticlesUrl={authorInfoUrl} />
          <AuthorMeta />
        </section>
      );
    }
    return null;
  }
}

export default AuthorInfo;
