import React from "react";
import { Link } from "gatsby";
import "./ArticleTeaser.css";

class ArticleTeaser extends React.Component {
  render() {
    const { cover, link } = this.props;
    let coverStyle = {backgroundImage: `url(${ cover })`};
    if (link) {
      return <Link to={link}>
          <div className="article-teaser" style={coverStyle} />
        </Link>;
    }
    return null;
  }
}

export default ArticleTeaser;
