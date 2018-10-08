import React from "react";
import "./SubscribeButton.css";

class SubscribeButton extends React.Component {
  render() {
    const { url } = this.props;
    if (url) {
      return (
        <link className="subscribe-button icon-feed" rel="alternate" type="application/rss+xml" title="Add Feed" href={url}>
          
        </link>
      );
    }
    return null;
  }
}

export default SubscribeButton;
