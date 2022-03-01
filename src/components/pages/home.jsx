import React, { Component } from "react";
import Navbar from "../common/navbar";
import SiteFooter from "../siteFooter";
const fileTableImage = require("../../resources/screenshot-filetable.png");
const managmentImage = require("../../resources/screenshot-managment.png");

class Home extends Component {
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
        <Navbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={itemList}
        />
        {/* Header Section */}
        <div className="header">
          <h1>Mini Online Storage</h1>
          <p>
            Mini Online Storage provide a easy solution for lightweight Online
            Storage. In here, you can store and download your files with a few
            clicks.
          </p>
        </div>

        {/* Subsection */}
        <div className="section bg-beige">
          <div className="sub-section">
            <img src={fileTableImage} alt="" />
          </div>
          <div className="sub-section">
            <h2>Freely upload your personal or work files</h2>
            <p>
              In Mini Online Storage, you can freely upload your files from your
              local computer to the online server. Once you upload your files,
              you can download them from anywhere. And you also can delete them
              if you don't want them.
            </p>
          </div>
        </div>

        {/* Subsection */}
        <div className="section bg-sky-blue">
          <div className="sub-section">
            <h2>Search and Organize your downloads</h2>
            <p>
              Mini Online Storage allows you to manage your files with ease. You
              can track your avaible free space by broswing the build-in
              dashboard in the sidebar.
            </p>
          </div>
          <div className="sub-section">
            <img src={managmentImage} alt="" />
          </div>
        </div>

        {/* Wrap Up Section */}
        <div className="section bg-pale-blue">
          <div className="sub-section" style={{ width: "100%" }}>
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

        {/* Footer */}
        {/*
        <div className="footer">
          <div>
            <h3>About Project</h3>
            <ul>
              <li>Project Report</li>
              <li>Source Code</li>
              <li>Developer</li>
              <li>Credit</li>
            </ul>
          </div>
          <div>
            <h3>Project Updates</h3>
            <ul>
              <li>Logs on Site</li>
              <li>Logs on Github</li>
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
        */}
        <SiteFooter />
      </div>
    );
  }
}

export default Home;
