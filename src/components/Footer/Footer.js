import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { label } = this.props.copyrightLabel;
    const { year } = this.props.copyrightYear;
    return (
      <footer className="site-footer clearfix">
        <section className="copyright">
          &copy;{" "}{year || new Date().getFullYear()}{` ${label}`}
        </section>
      </footer>
    );
  }
}

export default Footer;
