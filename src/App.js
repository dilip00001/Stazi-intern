import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import carsData from "./cars.json";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage carinfo={carsData} />} />
        <Route path="/page/:page" element={<HomePage carinfo={carsData} />} />
      </Routes>
    </>
  );
};

export default App;
