import React, { createContext, useContext, useState } from "react";
import veri from "../data";
import Koordinat from "../coordinat.js";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCity, setFilteredCity] = useState(veri);
  const [coordinat, setCoordinat] = useState(Koordinat);
  const [plaka, setPlaka] = useState("");

  const filteredCoordinat = coordinat.filter((item) => {
    return String(item.id) === String(plaka);
  });

  const coordinates = filteredCoordinat.map((item) => {
    return {
      latitude: item.coordinates.lat,
      longitude: item.coordinates.longitude,
    };
  });

  const data = {
    plaka,
    setPlaka,
    filteredCity,
    setFilteredCity,
    isModalOpen,
    setIsModalOpen,
    city,
    setCity,
    loading,
    setLoading,
  };

  return <CityContext.Provider value={data}>{children}</CityContext.Provider>;
};

export const useCityDetail = () => useContext(CityContext);
