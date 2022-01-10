/** @format */

import React from "react";
import "../Style/table.css";
import { useDispatch, useSelector } from "react-redux";

const InfoTable = () => {
  const dispatch = useDispatch();
  const csvFetchFile = useSelector((store) => store.home);
  console.log(csvFetchFile.loading);

  return csvFetchFile.sowaCvData ? (
    <div className="kdePns">
      <div className="grid-item">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td className="t-title">Start Date</td>
              <td>{csvFetchFile.sowaCvData.data.start_date}</td>
            </tr>
            <tr>
              <td className="t-title">Interval</td>
              <td>{csvFetchFile.sowaCvData.data.interval}</td>
            </tr>
            <tr>
              <td className="t-title">Total Outgoing Traffic (GB)</td>
              <td> {csvFetchFile.sowaCvData.data.total_outgoing_traffic_gb}</td>
            </tr>
            <tr>
              <td className="t-title">Total Disk Read (GB) </td>
              <td> {csvFetchFile.sowaCvData.data.total_disk_r}</td>
            </tr>
            <tr>
              <td className="t-title">Total Storage Transactions </td>
              <td>
                {" "}
                {csvFetchFile.sowaCvData.data.storage_transaction_units_total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid-item">
        <table class="table">
          <tbody>
            <tr>
              <td className="t-title">End Date </td>
              <td> {csvFetchFile.sowaCvData.data.end_date}</td>
            </tr>
            <tr>
              <td className="t-title">Length in Hours </td>
              <td> {csvFetchFile.sowaCvData.data.length_in_hour}</td>
            </tr>
            <tr>
              <td className="t-title">RAM (GB) </td>
              <td> {csvFetchFile.sowaCvData.data.total_disk_r}</td>
            </tr>
            <tr>
              <td className="t-title">Total Incoming Traffic (GB) </td>
              <td> {csvFetchFile.sowaCvData.data.total_incoming_traffic_gb}</td>
            </tr>
            <tr>
              <td className="t-title"> Total Disk Write (GB)</td>
              <td> {csvFetchFile.sowaCvData.data.total_disk_w}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
};
export default InfoTable;
