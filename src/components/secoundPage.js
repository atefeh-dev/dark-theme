/** @format */

import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import { BiInfoCircle } from "@react-icons/all-files/bi/BiInfoCircle";
import { MdMemory } from "@react-icons/all-files/md/MdMemory";
import { FiActivity } from "@react-icons/all-files/fi/FiActivity";
import { FiHardDrive } from "@react-icons/all-files/fi/FiHardDrive";
import InfoTable from "./infoTable";
import DropDown from "../components/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import "../Style/theme.css";
import "../Style/secoundPage.css";

const SecoundPage = () => {
  const fetchProvider = () => {
    axios
      .get("https://ai.djuno.io/api/upload")
      .then((respnse) => console.log(respnse));
  };
  const [provider, setProvider] = useState(null);
  useEffect(() => {}, []);

  const [key, setKey] = useState("home");
  const dispatch = useDispatch();
  const isloading = useSelector((store) => store.home);

  return isloading.sowaCvData ? (
    <div className="vx-card__body" style={{ height: "100vh" }}>
      <div
        className="card-snippet leading-loose sm:p-base card px-2 py-6 "
        style={{ height: "auto" }}>
        <h4 className="title mb-3 ml-1">Server Analysis</h4>
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey="overview"
          transition={false}
          onSelect={(k) => setKey(k)}
          className="mb-3">
          <Tab
            eventKey="overview"
            title={
              <span>
                <BiInfoCircle /> Overview
              </span>
            }>
            <InfoTable />
          </Tab>
          <Tab
            eventKey="cpu"
            title={
              <span>
                <MdMemory /> RAM
              </span>
            }>
            3
          </Tab>

          <Tab
            eventKey="traffic"
            title={
              <span>
                <FiActivity />
                {""} traffic
              </span>
            }></Tab>
          <Tab
            eventKey="disk"
            title={
              <span>
                <FiHardDrive />
                {""} Disk
              </span>
            }></Tab>
        </Tabs>
        <div style={{ marginTop: "38px" }}>
          <h4>Price Analysis</h4>
          <div className="kdePnp">
            <div className="grid-item">
              <DropDown />
            </div>
            <div className="grid-item">
              <DropDown />
            </div>
            <div className="grid-item">
              <DropDown />
            </div>
          </div>
          <div className="kdePng">
            <div className="grid-item">
              <input
                className="inputServer"
                type="number"
                id="quantity"
                name="quantity"
                min="-1"
                max="2"
                placeholder="1"
              />{" "}
            </div>
            <div className="grid-item">
              <ul className="demo-alignment">
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Pay as You Go (On Demand){" "}
                    </label>
                  </div>
                </li>
                <li>
                  {" "}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Provisioned 1 Year{" "}
                    </label>
                  </div>
                </li>
                <li>
                  {" "}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Provisioned 2 Years{" "}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default SecoundPage;
