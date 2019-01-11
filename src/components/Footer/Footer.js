import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer clearfix">
        <section className="copyright">
          &copy; 2018&ndash;{new Date().getFullYear()}{" "}{this.props.author}
        </section>
      </footer>
    );
  }
}

export default Footer;
