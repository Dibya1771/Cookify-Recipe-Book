import React, { useEffect } from "react";
import "../../CSS/Home.css";
import { useState } from "react";
import Pagination from "../../Components/Pagination";

const Meal = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((jsonData) => {
        setItem(jsonData);
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="n_main">
      <Pagination data={item} itemsPerPage={10} />
    </div>
  );
};

export default Meal;
