import React from "react";
import TurkeyMap from "turkey-map-react";
import { useEffect } from "react";
import { Tooltip } from "antd";
import { useCityDetail } from "../context/CityContext";
import data from "../data";
import Cities from "../components/Cities";

function Map() {
  const {
    city,
    setFilteredCity,
    setCity,
    isModalOpen,
    setIsModalOpen,
    setPlaka,
  } = useCityDetail();

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.il.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredCity(filtered);
  }, [city]);

  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id} placement="top">
      {cityComponent}
    </Tooltip>
  );

  const modalOpen = (city, plateNumber) => {
    console.log(city, plateNumber);
    setCity(city);
    setIsModalOpen(true);
    setPlaka(plateNumber);
  };

  return (
    <div className="w-full flex justify-center text-white">
      <div className="container">
        <TurkeyMap
          cityWrapper={renderCity}
          hoverable={true}
          onClick={({ name, plateNumber }) => modalOpen(name, plateNumber)}
        />
      </div>
      {isModalOpen && <Cities />}
    </div>
  );
}

export default Map;
