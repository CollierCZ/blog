import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { year } = this.props.copyrightYear;
    return (
      <footer className="site-footer clearfix">
        <section className="copyright">
          &copy;{" "}{year || new Date().getFullYear()}{" "}{this.props.author}
        </section>
      </footer>
    );
  }
}

export default Footer;
