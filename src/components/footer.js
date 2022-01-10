/** @format */
import React from "react";
import { ReactComponent as TwitterIC } from "../assets/images/social/twitter.svg";
import { ReactComponent as LinkdinIC } from "../assets/images/social/linkdin.svg";
import { ReactComponent as GithubIC } from "../assets/images/social/github.svg";
import { ReactComponent as DockerIC } from "../assets/images/social/docker.svg";
const Footer = () => {
  return (
    <footer>
      <div className="d-flex mb-3">
        <div className="p-2">
          <span style={{ marginLeft: "10px" }}>
            COPYRIGHT © {new Date().getFullYear()}{" "}
            <a
              href="https://djuno.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="footerLink">
              Djuno
            </a>
            <span>, All rights Reserved</span>
          </span>
        </div>

        <div className="p-2 bd-highlight">
          <div className="d-flex flex-wrap">
            <span className="pl-2" style={{ width: "20px" }}>
              <a href="https://twitter.com/realDjuno" target="_blank">
                <TwitterIC />
              </a>
            </span>
            <div
              className="pl-2"
              style={{ width: "30px", paddingLeft: "10px" }}>
              <a href="https://www.linkedin.com/company/djuno/" target="_blank">
                <LinkdinIC />
              </a>
            </div>
            <div
              className="pl-2"
              style={{ width: "30px", paddingLeft: "10px" }}>
              <a href="https://github.com/Djuno-Ltd" target="_blank">
                <GithubIC />
              </a>
            </div>
            <div
              className="pl-2"
              style={{ width: "30px", paddingLeft: "10px" }}>
              <a href="https://hub.docker.com/u/djunoltd" target="_blank">
                <DockerIC />
              </a>
            </div>
          </div>
        </div>
        <div className="ms-auto p-2 bd-highlight footer-link ">
          <div className="mx-auto ml-md-auto mr-md-3 pb-2 pb-md-0">
            <span style={{ paddingLeft: "12px" }}>
              <a href="https://djuno.io/" target="_blank">
                About
              </a>
            </span>
            <span style={{ paddingLeft: "12px" }}>
              <a href="https://blog.djuno.io/privacy-policy-2/" target="_blank">
                Privacy
              </a>
            </span>
            <span style={{ paddingLeft: "12px", marginRight: "10px" }}>
              <a
                href="https://blog.djuno.io/website-terms-of-use/"
                target="_blank">
                Terms
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
