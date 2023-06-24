// import React from 'react'
// import { useState } from 'react';
// import { useParams} from 'react-router-dom';
// let vid="";
// const RecipeInfo = () => {
//     const [item,setItem]=useState("");
//     const {MealId}=useParams();

//     if(MealId!="")
//     {
//         fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data.meals[0]);
//             setItem(data.meals[0]);
//         })
//     }
//     if(item){
//         const url=item.strYoutube;
//         const str=url.split("=");
//         vid=str[str.length-1];
//     }
//   return (
//     <>{
//         (!item)?"":(
//             <>
//                 <div className="content">
//                     <img src={item.strMealThumb} alt="Image" />
//                     <div className="innerContent">
//                         <h1>{item.strMeal}</h1>
//                         <h2>Area: {item.strArea}</h2>
//                         <h3>Category : {item.strCategory}</h3>
//                     </div>
//                     <div className="recipe-details">
//                         <div className="ingredients">
//                             <h2>Ingredients</h2><br/>
//                             <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
//                             <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
//                             <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
//                             <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
//                             <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
//                             <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
//                             <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
//                             <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
//                             <h4>{item.strIngredient9}:{item.strMeasure9}</h4>
//                         </div>
//                         <div className="instructions">
//                             <h2>Instructions</h2><br/>
//                             <h4>{item.strInstructions}</h4>
//                         </div>
//                         </div>
//                         <div className="video">
//                             <iframe src={`https://www.youtube.com/embed/${vid}`}>

//                             </iframe>
                        
//                     </div>
//                 </div>
//             </>
//         )
//     }
//     </>
//   )
// }

// export default RecipeInfo
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../Components/Recipe.css"
// import Button from "@mui/material/Button";

// const Recipe = () => {
//   const { id } = useParams();
//   const [recipeData, setRecipeData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3000/items/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data.items[id]); // Console log the received data object
//         setRecipeData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching recipe data:", error);
//       });
//   }, [id]);

//   const addToFavorites = () => {
//     // Assuming you have a user ID available
//     const userId = "123"; // Replace with the actual user ID
//     const favoriteItem = {
//     //   userId,
//     //   itemId: id,
//     //   name: recipeData.title,
//     //   image: recipeData.image,
//     userId,
//     itemId :id,
//     item_name :recipeData.title,
//     image_url: recipeData.image
//     };

//     fetch('http://localhost:3000/fav', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(favoriteItem),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Item added to favorites:", data);
//         // Optionally, you can show a success message or update the UI
//       })
//       .catch((error) => {
//         console.error("Error adding item to favorites:", error);
//         // Optionally, you can show an error message or handle the error
//       });
//   };

//   if (!recipeData) {
//     return <div>Loading...</div>; // Render loading state while fetching data
//   }

//   const { title, ingredients, recipe, image, video } = recipeData;

//   return (
//     <div className="ss_card">
//       <div className="ss_video">
//         <iframe id="ss_iframe" src={video}></iframe>
//         <p>
//           if the above video doesn't play <a href={video}>Click here</a>
//         </p>
//         <Button id="ss_add" variant="contained"  onClick={addToFavorites}>
//           Add to favorites
//         </Button>
//       </div>
//       <div className="ss_data">
//         <div className="ss_data-child">
//           <h2 className="ss_item">{title}</h2>
//           <div className="ss_ingredients">
//             <h3>Ingredients</h3>
//             <div className="ss_ingredient_child">
//               {ingredients.map((el, index) => (
//                 <span key={index}>
//                   <ul>
//                     <li>{el}</li>
//                   </ul>
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="ss_recipe">
//             <h3>Recipe</h3>
//             <div className="ss_recipe_child"></div>
//             <p>{recipe}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Recipe;
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/Recipe.css";
import Button from "@mui/material/Button";

const Recipe = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.items[id]); // Console log the received data object
        setRecipeData(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [id]);

  const addToFavorites = () => {
    // Assuming you have a user ID available
    const userId = "1"; // Replace with the actual user ID
    const favoriteItem = {
      userId,
      itemId: id,
      name: recipeData.title,
      image: recipeData.image,
    };

    fetch("http://localhost:3000/fav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Item added to favorites:", data);
        swal("Success!", "Item added to favourites.", "success"); // Display the SweetAlert message

        // Optionally, you can show a success message or update the UI
      })
      .catch((error) => {
        console.error("Error adding item to favorites:", error);
        // Optionally, you can show an error message or handle the error
      });
  };




  if (!recipeData) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  const { title, ingredients, recipe, image, video } = recipeData;

  return (
    <div className="ss_card">
      <div className="ss_video">
        <iframe id="ss_iframe" src={video}></iframe>
        <p>
          if the above video doesn't play <a href={video}>Click here</a>
        </p>
        <Button id="ss_add" variant="contained"  onClick={addToFavorites}>
          Add to favorites
        </Button>
      </div>
      <div className="ss_data">
        <div className="ss_data-child">
          <h2 className="ss_item">{title}</h2>
          <div className="ss_ingredients">
            <h3>Ingredients</h3>
            <div className="ss_ingredient_child">
              {ingredients.map((el, index) => (
                <span key={index}>
                  <ul>
                    <li>{el}</li>
                  </ul>
                </span>
              ))}
            </div>
          </div>
          <div className="ss_recipe">
            <h3>Recipe</h3>
            <div className="ss_recipe_child"></div>
            <p>{recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;