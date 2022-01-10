/** @format */

import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/logo/logo.svg";
import { ReactComponent as MoontLogo } from "../assets/images/icons/moon.svg";
import { ReactComponent as SunLogo } from "../assets/images/icons/sun.svg";
import { ReactComponent as MobileAvatar } from "../assets/images/avatars/mobile-avatar.svg";

import ProductDropDown from "./ProductDropDown";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../action/controller/action";

const Header = () => {
  const appCtrl = useSelector((state) => state.controller);
  const dispatch = useDispatch();
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming Soon!
    </Tooltip>
  );

  console.log("sate: ", appCtrl);
  return (
    <>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <div className="appLogo">
              <Navbar.Brand href="#">
                <div className="search-logo">
                  <ReactLogo className="appSvg" />
                </div>
              </Navbar.Brand>
              <span className="moon-logo">
                {appCtrl.theme === "light-theme" && (
                  <MoontLogo
                    onClick={() => dispatch(changeTheme("dark-theme"))}
                  />
                )}
                {appCtrl.theme === "dark-theme" && (
                  <SunLogo
                    onClick={() => dispatch(changeTheme("light-theme"))}
                  />
                )}
              </span>
            </div>

            <div className="fixedSize">
              <ProductDropDown />
            </div>

            <Form className="d-flex">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}>
                <MobileAvatar className="mobile-avatar" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}>
                <Button
                  className="signin-btn .wave"
                  variant="primary"
                  size="lg"
                  style={{ marginRight: "12px", width: "110px" }}>
                  <span style={{ fontSize: "16px" }}>Sign in</span>
                </Button>
              </OverlayTrigger>
            </Form>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;
