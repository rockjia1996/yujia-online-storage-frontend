import React, { Component } from "react";
import CustomNavbar from "../common/customNavbar";
import SiteFooter from "../siteFooter";
class About extends Component {
  state = {};
  render() {
    const itemList =
      this.props.user && localStorage.getItem("token")
        ? [
            { name: "Home", link: "/" },
            { name: "Storage", link: "/storage" },
            { name: "Updates", link: "/updates" },
            { name: "About", link: "/about" },
          ]
        : [
            { name: "Home", link: "/" },
            { name: "Updates", link: "/updates" },
            { name: "Login", link: "/login" },
            { name: "Register", link: "/register" },
            { name: "About", link: "/about" },
          ];

    return (
      <div>
        <CustomNavbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={itemList}
        />

        <div className="container">
          {/* About the Site and Developer */}
          <table className="table m-4">
            <thead>
              <tr>
                <th>About the Site and Developer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    Mini Online Storage is one of my sandbox projects. The
                    project was built in my off-work time as a web developer
                    intern in NSTEM. This is the first personal project that I
                    built on my own since I graduated from Saint Louis
                    University about eight months ago.
                  </p>

                  <p>
                    When I just graduated and started applying for different web
                    developer jobs, I noticed a considerable gap between what I
                    learned in college and what employers expect me to know.
                    Back to eight months ago, I didn't know any framework and
                    network programming in real life. But most of the web
                    developer jobs are looking for these skillsets. I realized a
                    gap that I needed to bridge to make myself hit the
                    expectations from the market.
                  </p>

                  <p>
                    I really enjoyed learning about different frameworks. In
                    this project, the frameworks that I used are React.js and
                    Express.js. By learning and applying these frameworks in
                    real-world programming. It showed me an entirely new
                    perspective of programming, how programming should be
                    engineered, and how tasks can be done in an efficient
                    manner. The project was not meant to use for a commercial
                    purpose but as a showcase of personal programming skills
                    development. It also served the purpose of avoiding me
                    getting into the "tutorials hell." since I can always apply
                    what I learn to the project.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Future work and development */}
          <table className="table m-4">
            <thead>
              <tr>
                <th>Future work and development</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    The development of the project will be an ongoing task.
                    There still are a lot of improvements can be done. The exact
                    details about improvements can be found in the updates page
                    in the future.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Credit and Library Usage */}
          <table className="table m-4">
            <thead>
              <tr>
                <th>Credit and Library Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Frontend</p>
                  <p>
                    fontawesome, axios, bootstrap, jow-browser, jwt-decode,
                    lodash, react-bootstrap, react-router-dom, react-toastify
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <p>Backend</p>
                  <p>
                    bcrypt, cors, express, joi, jsonwebtoken, lodash, mongoose,
                    multer, nodemon
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Source Code and Project Report */}
          <table className="table m-4">
            <thead>
              <tr>
                <th>Source Code and Project Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <a
                      href="https://github.com/rockjia1996/yujia-online-storage-frontend"
                      target="_blank"
                    >
                      Front-end Source Code
                    </a>
                  </p>
                </td>

                <td>
                  <p>
                    <a
                      href="https://github.com/rockjia1996/yujia-online-storage-backend"
                      target="_blank"
                    >
                      Back-end Source Code
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <a href="https://www.heroku.com/" target="_blank">
                      Hosting Service (Server): Heroku
                    </a>
                  </p>
                </td>
                <td>
                  <p>
                    <a href="https://www.mongodb.com/atlas" target="_blank">
                      Hosting Service (Database): MongoDB Altas
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SiteFooter />
      </div>
    );
  }
}

export default About;
