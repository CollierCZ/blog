import React from "react";
import "./ArticleFormatting.css";

class ArticleFormatting extends React.Component {
  render() {
    const { children, className } = this.props;
    return <article className={className}>{children}</article>;
  }
}

export default ArticleFormatting;
