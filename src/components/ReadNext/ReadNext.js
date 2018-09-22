import React, { Component } from "react";
import classNames from "classnames";
import Link from "gatsby-link";
import "./ReadNext.css";

const ReadNextStory = props => {
  const { article } = props;
  if (article) {
    /** Limit words to 19 in GraphQL * */
    const { path, cover, title, excerpt } = article;
    const styles = cover ? { backgroundImage: `url(${cover}` } : null;
    const classes = classNames("read-next-story", props.className, {
      "no-cover": !cover
    });
    return (
      <Link className={classes} style={styles} to={path}>
        <section className="article">
          <h2>{title}</h2>
          <p>{excerpt}&hellip;</p>
        </section>
      </Link>
    );
  }
  return null;
};

/**
 * Links to Previous/Next articles
 */
class ReadNext extends Component {
  render() {
    const { next, prev } = this.props;
    return (
      <aside className="read-next">
        <ReadNextStory article={next} />
        <ReadNextStory className="prev" article={prev} />
      </aside>
    );
  }
}

export default ReadNext;
