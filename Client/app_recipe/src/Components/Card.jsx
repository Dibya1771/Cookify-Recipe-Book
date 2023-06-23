import React from "react";
import { useNavigate } from "react-router-dom";
const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  // if(loading){
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => {
                  navigate(`/items/${item.id}`);
                }}
              >
                <img src={item.image} alt="Loading" />
                <h3>{item.title}</h3>
              </div>
            );
          })}
    </>
  );
};

export default MealItem;
