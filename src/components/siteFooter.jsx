import React, { Component } from "react";

class SiteFooter extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div>
          <h3>About Project</h3>
          <ul>
            <li>
              <a href="#">Project Report</a>
            </li>
            <li>
              <a href="https://github.com/rockjia1996?tab=repositories">
                Source Code
              </a>
            </li>
            <li>
              <a href="/about">Developer</a>
            </li>
            <li>
              <a href="/about">Credits</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Project Updates</h3>
          <ul>
            <li>
              <a href="/updates">Logs on Site</a>
            </li>
            <li>
              <a href="https://github.com/rockjia1996?tab=repositories">
                Logs on Github
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Developer</h3>
          <ul>
            <li>Phone: (314)-546-1998</li>
            <li>Email: rockjia1996@gmail.com</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SiteFooter;
