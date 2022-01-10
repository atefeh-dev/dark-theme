/** @format */

import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "../Style/theme.css";
import logo from "../assets/images/1.png";
import Dashboard from "../views/Dashboard";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [loading, setLoading] = useState(true);
  const AppController = useSelector((store) => store.controller);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <>
      <div className="box mx-auto">
        <Loader
          type="Rings"
          color="#307DBF"
          height={100}
          width={100}
          timeout={500} //3 secs
        />
        <img src={logo} />
      </div>
    </>
  ) : (
    <div className={AppController.theme}>
      <Dashboard />
    </div>
  );
};

export default App;
