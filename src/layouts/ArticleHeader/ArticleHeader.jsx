import React from "react";
import "./ArticleHeader.css";

class ArticleHeader extends React.Component {
  render() {
    const { children } = this.props;
    return <header className="post-header">{children}</header>;
  }
}

export default ArticleHeader;
