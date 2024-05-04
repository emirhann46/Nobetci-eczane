import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useCityDetail } from "../context/CityContext";
const Cities = () => {
  const { isModalOpen, setIsModalOpen, filteredCity, plaka } = useCityDetail();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const istek = (ilce) => {
    console.log("İstek atıldı " + "" + ilce);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        className="h-2/3 overflow-y-auto"
      >
        {filteredCity.map((city) => (
          <div className="rounded-xl " key={city.plaka}>
            <div className="flex flex-col ">
              <h3
                onClick={() => istek(city.il)}
                className=" bg-blue-600 cursor-pointer text-white rounded-md max-h-12 p-1 m-1"
              >
                {city.il}(Hepsi)
              </h3>
              {city.ilceleri.map((ilce) => (
                <div
                  onClick={() => istek(ilce)}
                  className="bg-blue-600 cursor-pointer text-white rounded-md max-h-12 p-1 m-1"
                  key={ilce}
                >
                  {ilce}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
};
export default Cities;
