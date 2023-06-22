import React, { useState, useEffect } from "react";
import "../../CSS/Favourites.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Button from "@mui/material/Button";
import Images1 from "../../Images/Untitled design.png";
import Images from "../../Images/Untitled_design1.png";
import Footer from "../../Components/Footer";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/fav");
      const data = await response.json();
      setFavourites(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const removeFromFavourites = async (itemId) => {
    try {
      await fetch(`http://localhost:3000/fav/${itemId}`, {
        method: "DELETE",
      });
      // Update the state by filtering out the deleted item
      const updatedFavourites = favourites.filter((item) => item.id !== itemId);
      setFavourites(updatedFavourites);
      console.log("Data deleted successfully.");
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  return (
    <>
      <div className="ss_fav">
        <div className="ss_vector">
          <img className="ss_vector_img image1" src={Images} alt="" />
          <img className="ss_vector_img image2" src={Images1} alt="" />
        </div>
        <div className="ss_right">
          <div class="ss_set">
            <h1>Your Favourites</h1>
            <div id="linemovement"></div>
          </div>

          {favourites.map((el) => (
            <div className="ss_field" key={el.id}>
              <img src={el.image_url} alt={el.item_name} />
              <h2>
                {el.item_name}
                <Rater total={5} rating={2} />
              </h2>
              <div>
                <Button
                  id="ss_remove"
                  variant="contained"
                  onClick={() => removeFromFavourites(el.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Favourites;
