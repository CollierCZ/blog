import React from "react";
import { Link } from "gatsby";
import "./SubscribeButton.css";

class SubscribeButton extends React.Component {
  render() {
    return (
      <Link className="subscribe-button icon-feed" to="/rss.xml">
        <span className="sr-only">Subscribe</span>
      </Link>
    );
  }
}

export default SubscribeButton;
