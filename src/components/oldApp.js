/** @format */

import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "../Style/theme.css";
import logo from "../assets/images/1.png";
import { Button } from "react-bootstrap";
import Dashboard from "../views/Dashboard";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    setLoading(false);
  }, []);
  // [] means like componentDidMount

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
    <div className={theme}>
      <Dashboard />
      <Button
        variant="primary"
        onClick={() =>
          setTheme(theme === "light-theme" ? "dark-theme" : "light-theme")
        }>
        Change theme
      </Button>
      <a href="/">LINK</a>
    </div>
  );
};

export default App;
