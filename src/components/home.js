/** @format */

import React, { useState } from "react";
import FirstPage from "./firstPage";

import { useDispatch, useSelector } from "react-redux";
import SecoundPage from "./secoundPage";

const Home = () => {
  const [sampleData, setSampleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(sampleData);
  const HomeController = useSelector((store) => store.home);
  console.log(HomeController.loading);
  return <>{!HomeController.loading ? <FirstPage /> : <SecoundPage />}</>;
};
export default Home;
