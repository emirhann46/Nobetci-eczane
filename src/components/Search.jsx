import { Button, Input } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useCityDetail } from "../context/CityContext";
import data from "../data";
import axios from "axios";

function Search() {
  const { city, setCity } = useCityDetail();
  return (
    <div className="search flex mt-10 gap-3">
      <div className="flex">
        <Input
          onKeyDown={(e) => {
            if (e.key === " ") {
              e.preventDefault();
            }
          }}
          className="mr-2"
          placeholder="İl adı girin"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Button type="primary">Ara</Button>

      {/* Tüm şehirleri göster */}
      {/* {filteredCity.map((item) => (
        <div key={item.il}>{item.il}</div>
      ))} */}
    </div>
  );
}

export default Search;
