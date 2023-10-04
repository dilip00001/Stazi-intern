import React, { useState } from "react";
import Cars from "../Components/Cars";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomePage = ({ carinfo }) => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 6;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // function to filter the entire 'cars' array based on the search text
  const filteredCars = carinfo?.filter((car) =>
    car.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Hard code Total number of pages

  return (
    <div className=" py-3 homecontainer">
      <div className="container mx-auto ">
        {/* Header */}
        <Header setSearchText={setSearchText} searchText={searchText} />
        {/*  */}
        {/* Cards Listing */}
        <Cars cars={currentCars} />
        {/*  */}
        {/* Footer */}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default HomePage;
