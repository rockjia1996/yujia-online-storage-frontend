import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";

import screenshot4 from "../images/screenshot4.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar
          brandName={{ name: "Mini Online Storage", url: "/" }}
          navLinks={{
            About: "/about",
            Updates: "/updates",
            Contact: "/contact",
            Login: "/login",
          }}
        />
        <Header />
        <div className={"section bg-yellow"}>
          <div className="sub-section">
            <img src={screenshot4} />
          </div>
          <div className="sub-section">
            <h2>Freely upload your personal or work files</h2>
            <p>
              Mini Online Storage allows you freely upload your files from your
              local computer to the online server. Once you upload your files,
              you can download them from anywhere. And you also can delete them
              if you don't want them.
            </p>
          </div>
        </div>

        <div className={"section bg-red"}>
          <div className="sub-section">
            <h2>Search and Organize your downloads</h2>
            <p>
              Mini Online Storage allows you to pack your files when
              downloading. So no need to download each indiviual file
              sepreately. Also you can search your files based on the different
              contraint that you provided.
            </p>
          </div>
          <div className="sub-section">
            <img src={screenshot4} />
          </div>
        </div>

        <div className={"section bg-orange"}>
          <div className="sub-section">
            <img src={screenshot4} />
          </div>
          <div className="sub-section">
            <h2>It's Free and Open Source!</h2>

            <p>
              Mini Online Storage is free and open source. Mini Online Storage
              is composited by React.js Framework and Express Framework in
              Node.js.
            </p>

            <p>
              In the frontend, Mini Online Storage uses React.js as its main
              framwork. In the backend, Mini Online Storage run on a Node.js
              Server that use Express.
            </p>
            <p>
              You are free to <a href="/register">sign up </a>and use it online.
              If you want to use it on your local network. You can find the
              source code in my Github repositories (
              <a href="https://github.com/rockjia1996/yujia-online-storage-frontend.git">
                frontend
              </a>
              /
              <a href="https://github.com/rockjia1996/yujia-online-storage-backend.git">
                backend
              </a>
              ).
            </p>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
