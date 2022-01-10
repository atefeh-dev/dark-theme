/** @format */

import React, { useState } from "react";

import { ReactComponent as DjunoIC } from "../assets/images/products/djuno/ic.svg";
import { ReactComponent as LatencyIC } from "../assets/images/products/latency/ic.svg";
import { ReactComponent as SowaIC } from "../assets/images/products/sowa/ic.svg";
import { ReactComponent as SwarmIC } from "../assets/images/products/swarm/ic.svg";
import { ReactComponent as CompassIC } from "../assets/images/products/compass/ic.svg";
import { ReactComponent as DtgIC } from "../assets/images/products/dtg/ic.svg";
import { ReactComponent as StatusIC } from "../assets/images/products/status/ic.svg";
import { ReactComponent as DjerboaIC } from "../assets/images/products/djerboa/ic.svg";
import { ReactComponent as AlwaysONIC } from "../assets/images/products/always_on/ic.svg";
import { ReactComponent as DmqIC } from "../assets/images/products/dmq/ic.svg";
import { ReactComponent as StackAiIC } from "../assets/images/products/stack_ai/ic.svg";
import { ReactComponent as HumbergerIcon } from "../assets/images/icons/humberger.svg";

import {
  Navbar,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  SplitButton,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}>
        <ul className="list-unstyled">
          <a
            className="navbar-services__link "
            href="https://search.djuno.io/"
            target="_blank">
            <div className="navbar-services__item">
              <DjunoIC className="navbar-services__avatar" />

              <div class="navbar-services__title">Search</div>
            </div>
          </a>
          <a
            className="navbar-services__link"
            href="https://latency.djuno.io/"
            target="_blank">
            <div className="navbar-services__item">
              <LatencyIC className="navbar-services__avatar" />
              <div class="navbar-services__title">Latency</div>
            </div>
          </a>
          <a className="navbar-services__link" href="#">
            <div className="navbar-services__item">
              <SowaIC className="navbar-services__avatar" />
              <div class="navbar-services__title">Sowa</div>
            </div>
          </a>
          <a
            className="navbar-services__link"
            href="https://github.com/Djuno-Ltd/paas-in-the-box"
            target="_blank">
            <div className="navbar-services__item">
              <SwarmIC className="navbar-services__avatar" />
              <div class="navbar-services__title">Swarm</div>
            </div>
          </a>
          <a
            className="navbar-services__link"
            href="https://compass.djuno.io/"
            target="_blank">
            <div className="navbar-services__item">
              <CompassIC className="navbar-services__avatar" />
              <div class="navbar-services__title">Compass</div>
            </div>
          </a>
          <a className="navbar-services__link">
            <div className="navbar-services__item">
              <DtgIC
                className="navbar-services__avatar"
                href="https://dtg.djuno.io/"
                target="_blank"
              />
              <div class="navbar-services__title">DTG</div>
            </div>
          </a>
          <a className="navbar-services__link disabled">
            <div className="navbar-services__item">
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <StatusIC className="navbar-services__avatar" />
              </OverlayTrigger>

              <div class="navbar-services__title">Status</div>
            </div>
          </a>
          <a className="navbar-services__link disabled">
            <div className="navbar-services__item">
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <DjerboaIC className="navbar-services__avatar" />
              </OverlayTrigger>

              <div class="navbar-services__title">Djerboa</div>
            </div>
          </a>
          <a className="navbar-services__link disabled">
            <div className="navbar-services__item">
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <AlwaysONIC className="navbar-services__avatar" />
              </OverlayTrigger>

              <div class="navbar-services__title">Always-on</div>
            </div>
          </a>
          <a className="navbar-services__link disabled">
            <div className="navbar-services__item">
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <DmqIC className="navbar-services__avatar" />
              </OverlayTrigger>

              <div class="navbar-services__title">DMQ</div>
            </div>
          </a>
          <a className="navbar-services__link disabled">
            <div className="navbar-services__item">
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <StackAiIC className="navbar-services__avatar" />
              </OverlayTrigger>

              <div class="navbar-services__title">Stack_AI</div>
            </div>
          </a>
        </ul>
        <hr />

        <div className="pl-2 px-2 pr-2">
          <Button variant="primary" size="lg" className="browse-all-btn">
            Browes All
          </Button>
        </div>
      </div>
    );
  }
);

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className="toggleBtn"
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    <HumbergerIcon />
  </div>
));

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Coming Soon!
  </Tooltip>
);
const ProductDropDown = () => {
  return (
    <React.Fragment>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

        <Dropdown.Menu
          as={CustomMenu}
          align={{ lg: "start" }}
          className="menuWrapper"></Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};
export default ProductDropDown;
