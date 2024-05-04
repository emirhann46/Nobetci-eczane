import React, { useState } from "react";
import List from "./pages/List";
import { useCityDetail } from "./context/CityContext";
import { CgArrowsExchange } from "react-icons/cg";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Map from "./pages/Map";

function App() {
  const { setCity } = useCityDetail();
  const [page, setPage] = useState("list");

  const toggleIcerik = () => {
    setCity("");
    setPage(page === "map" ? "list" : "map"); // Corrected the logic
  };

  return (
    <>
      <div className="w-full">
        <div className="logo bg-[#fab1a0]">
          <img className="m-auto" src="src/images/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="flex justify-center items-center text-6xl mt-10">
        <button onClick={toggleIcerik}>
          <CgArrowsExchange color="red" />
        </button>
      </div>
      {page === "list" && <List />}
      {page === "map" && <Map />}
    </>
  );
}

export default App;
