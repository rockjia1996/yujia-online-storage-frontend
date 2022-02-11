import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-section">
          <h3>About Project</h3>
          <ul className="footer-section-list">
            <li>Project Report</li>
            <li>Source Code</li>
            <li>Author</li>
            <li>Credit</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Project Updates</h3>
          <ul className="footer-section-list">
            <li>Logs on Site</li>
            <li>Logs on Github</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Author</h3>
          <ul className="footer-section-list">
            <li>Phone: (314)-546-1998</li>
            <li>Email: rockjia1996@gmail.com</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
