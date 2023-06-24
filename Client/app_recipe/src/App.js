// import React from "react";
// import Meal from "./Components/Meal";
// import './Components/style.css';
// import {Routes,Route} from "react-router-dom";
// import RecipeInfo from "./Components/RecipeInfo";
// function App() {
//   return (
//    <>
//    <Routes>
//       <Route path="/" element={<Meal/>}></Route>
//       <Route path="/:MealId" element={<RecipeInfo/>}></Route>
      
//    </Routes>
//    </>
//   );
// }

// export default App;
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
import Home from './Pages/HomePage/Home';
// import Profile from './Pages/Profile';
// import Favourites from './Pages/Favourites/Favourites';
// import About from './Pages/About/About';
// import Contact from './Pages/Contact/Contact';
// import Footer from './Components/Footer';
// import Recipe from "./Pages/Recipe/Recipe";
// import RecipeDetails from './Pages/RecipeDetails/RecipeDetails';
import Login from "./Pages/Login";
import Recipe from './Components/RecipeInfo';
import Favourites from './Pages/Favourite/Favourites';
function App() {


  const [selectedColor, setSelectedColor] = useState(''); // Default background color
  const [selectcol, setSelectcol] = useState('#000'); // Default color

  const handleColorChange = (color, col) => {
    setSelectedColor(color);
    setSelectcol(col);
  };

  return (

    // <div className='App' >
    <div className='App' style={{ background: selectedColor, color: selectcol }}>
      {/* <div className='background' style={{ backgroundImage: selectedColor, color: selectcol }}> */}
      <Router>
        {/* <Navbar handleColorChange={handleColorChange} /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path='/favourites' element={<Favourites />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path='/recipe' element={<Recipe />} /> */}
          {/* <Route path="/recipes/:recipeId" element={<RecipeDetails />} /> */}
<Route path='/items/:id' element={<Recipe/>}></Route>
<Route path='/favourites' element={<Favourites/>}></Route>
        </Routes>
        {/* <Footer />
      </Router> */}</Router>
    </div>
    //  </div >
  );
}

export default App;