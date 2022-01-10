/** @format */
import React from "react";
import "../Style/dropdown.css";
const DropDown = () => {
  return (
    <div id="selector" className="SelectContainer">
      <select className="form-control input-lg">
        <option value="" disabled selected>
          Select something...
        </option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <i className="fa fa-chevron-down"></i>
    </div>
  );
};
export default DropDown;
