/** @format */

import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { fetchCvData } from "../action/home/action";
import { useDispatch, useSelector } from "react-redux";

const FirstPage = () => {
  const inputFileRef = useRef(null);
  const dispatch = useDispatch();

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };

  const onFilechange = (e) => {
    /*Selected files data can be collected here.*/
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    dispatch(fetchCvData(data));
    e.preventDefault();
  };
  return (
    <>
      <div className="card-snippet leading-loose sm:p-base card px-2 py-6">
        <div className=".vx-card__body">
          <div className="vx-row leading-loose sm:p-base px-2 py-6">
            <h4 className="title">Server Analysis</h4>
            <div className=" invoice__recipient-info mt-2">
              <p className="text-justify">
                1. Upload a CSV file with your infrastructure utilization data.
                The file should include the following data, with these exact
                labels in the first row:
              </p>

              <p>
                <b>time_stamp</b>, <b>cpu_cores</b>, <b>cpu_provision</b>,{" "}
                <b>cpu_usage</b>, <b>cpu_usage_percent</b>
                <b>memory_kb</b>, <b>memory_usage_kb</b>, disk_read_kb,
                disk_write_kb, traffic_in_usage_kb_per_sec,
                traffic_out_usage_kb_per_sec.
              </p>
              <p className="mb-2 text-justify">
                Bold columns are required, the others are optional but will help
                with the precision of our calculations. The order of the columns
                is not important.
              </p>
              <p className="text-justify mb-2">
                {" "}
                2. We’ll generate a system analysis report including the
                utilization forecast;{" "}
                <b>
                  This may take a few minutes, depending on the amount of server
                  data.
                </b>
                Your request will be processed in the background, so the
                predictions can take some time to generate. If you can’t see the
                charts, click on the relevant tab again after a minute or two.{" "}
              </p>
              <p className="text-justify mb-2">
                3. We’ll generate a price analysis report that shows
                infrastructure costs scenarios based on different cloud
                providers.
                <br />
                You can use our sample data to see how it works if you don’t
                have your own data readily available.
                <br />
              </p>
              <a href="djuno-sample-data.csv" target="_blank" download="">
                Download Sample Data from 1 Server (.csv)
              </a>
              <br />
              <a href="djuno-samples.zip" target="_blank" download="">
                Download Sample Data from 1000 Servers (.zip)
              </a>
            </div>{" "}
            <input
              type="file"
              accept=".csv"
              ref={inputFileRef}
              onChange={(e) => onFilechange(e)}
              style={{ display: "none" }}
            />
            <br />
            <Button
              className="upload-btn"
              variant="primary"
              onClick={onBtnClick}
              style={{ width: "100%", marginTop: "16px" }}>
              <span className="file-upload-icon">⇪</span>
              <div>Upload Csv</div>{" "}
            </Button>
          </div>
        </div>
        <div className="vx-col w-full ">
          <p className="text-center">
            Djuno your cloud to lower both costs and risks,{" "}
            <a href="https://djuno.io/">Read More</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
