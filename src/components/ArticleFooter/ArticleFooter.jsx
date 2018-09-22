import React from "react";
import "./ArticleFooter.css";

class ArticleFooter extends React.Component {
  render() {
    const { children } = this.props;
    return <footer className="article-footer">{children}</footer>;
  }
}

export default ArticleFooter;
