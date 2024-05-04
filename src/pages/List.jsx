import React, { useEffect } from "react";
import { useCityDetail } from "../context/CityContext";
import Search from "../components/Search";
import Cities from "../components/Cities";
import data from "../data";

function List() {
  const {
    filteredCity,
    setFilteredCity,
    setIsModalOpen,
    city,
    setCity,
    setPlaka,
    isModalOpen,
  } = useCityDetail();

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.il.toLocaleLowerCase("TR").includes(city.toLocaleLowerCase("TR"))
    );
    setFilteredCity(filtered);
  }, [city]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const modalOpen = (city, plateNumber) => {
    console.log(city, plateNumber);
    setCity(city);
    showModal();
    setPlaka(plateNumber);
  };

  return (
    <div className="flex flex-col gap-9">
      <Search />
      <div
        className={`flex ${
          filteredCity.length % 4 === 1 ||
          filteredCity.length % 4 === 2 ||
          filteredCity.length % 4 === 3
            ? "justify-center"
            : "justify-between"
        }  gap-4 mx-auto max-w-7xl overflow-y-auto h-2/3 flex-wrap text-white`}
      >
        {filteredCity &&
          filteredCity.map((item, index) => {
            return (
              <div
                className={
                  "flex justify-center cursor-pointer items-center max-h-12 gap-4 p-2 min-w-28 mx-1 w-40 flex-wrap bg-white text-black rounded-md"
                }
                key={index}
                onClick={() => modalOpen(item.il, item.plaka)}
              >
                {item.il}
              </div>
            );
          })}
      </div>
      {isModalOpen && <Cities />}
    </div>
  );
}

export default List;
