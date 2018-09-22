import React from "react";
import moment from "moment";
import "./ArticleDate.css";

class ArticleDate extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <time
        className="article-date"
        dateTime={moment(new Date(date)).format("YYYY-MM-DD")}
      >
        {moment(new Date(date)).format("DD MMMM YYYY")}
      </time>
    );
  }
}

export default ArticleDate;
