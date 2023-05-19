import React, { useEffect, useState } from "react";
import Toy from "./Toy";
import "./Category.css"

const Category = () => {
  const [toys, setToy] = useState([]);
  const [activeTab, setActiveTab] = useState("Puzzles");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToy(result);
        // console.log(result);
      });
  }, [activeTab]);


  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div>
        <h1 className="title text-center text-3xl mt-5 p-5 bg-violet-800">Select Toy's category</h1>
        <div className="tab-container text-center mb-4  p-10 ">
          <div className="text-center w-full h-full m-auto  ">
            {/* <div className="tabs d-flex justify-content-center align-items-center"> */}
              <div
                onClick={() => handleTabClick("Puzzles")}
                className={`tab  tab2 remote ${
                  activeTab == "Puzzles" ? " bg-red-700 text-black" : ""
                }`}
              >
               Puzzles
              </div>
              <div
                onClick={() => handleTabClick("construction")}
                className={`tab  tab2 Construction ${
                  activeTab == "construction" ? " bg-red-700 text-black" : ""
                }`}
              >
                Construction
              </div>
              <div
                onClick={() => handleTabClick("numbers")}
                className={`tab  tab2 numbers ${
                  activeTab == "numbers" ? " bg-red-700  text-black" : ""
                }`}
              >
               Numbers
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 ">
          {toys?.map((toy) => (
            <Toy toy={toy}></Toy>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
