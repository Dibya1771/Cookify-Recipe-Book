import React, { useEffect } from 'react'
import MealItem from './MealItem'
// import RecipeIndex from './RecipeIndex'
import { useState} from 'react'
import {ImSearch} from "react-icons/im";
import Pagination from './Pagination';
import { json } from 'react-router';
import SignUp from '../Pages/Login';
import Profile from '../Pages/Profile';
const Meal = () => {
    // const [url,setUrl]=useState("");
    const [item,setItem]=useState([]);
    const [search,setSearch]=useState("");
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState([1]);
    // const [itemsPerPage,setItemsPerPage]=useState([5]);
    const itemsPerPage=10;
    // const [totalPages, setTotalPages] = useState([1]);
    
    // useEffect(()=>{
    // //    fetch(url).then(res=>res.json().then(data=>{
    // //     console.log(data.meals);
    // //     setItem(data.meals);
    // //     setShow(true);
    //         const fetchItems=async()=>{
    //         setLoading(true);
    //         await fetch(url)
    //         .then(data => data.json()
    //         )
    //         .then(item => {
    //         console.log(item);
    //         setItem(item);
    //         setLoading(false);
    //         })
    //     }
    //    fetchItems();
    // },[url])
    // const setIndex=(alpha)=>{
    //     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    // }
    // const searchRecipe=(ev)=>{
    //     if(ev.key=="Enter")
    //         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    // }
//Pagination
    // const getData = async () => {
        // setUrl("http://localhost:3008/meals");
        // if (search) {
        //     var url1=url;
        //     url1 += `&q=${search}`;
        //     setUrl(url1);
        // }
        
        // fetch('http://localhost:3008/meals')
        // .then(data => data.json())
        // .then(items => {
        // console.log(items);
        // // setItem(items);
        
        // });
        // };

        useEffect(() => {
            // Fetch data from JSON file
            fetch('http://localhost:3008/meals')
              .then((response) => response.json())
              .then((jsonData) => {
                setItem(jsonData);
                console.log(jsonData)
              })
              .catch((error) => {
                console.error('Error fetching data:', error);
              });
          }, []);
        




  return (
    <>
    <div className="main">
        <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda tempore a eos minima? Velit temporibus, ab fuga eos impedit tempore enim quidem repudiandae modi saepe recusandae, ea, incidunt quis. Mollitia, laboriosam odit. Voluptatum.</h4>
        </div>
        {/* <div className='searchBox'>
            <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
            <button><ImSearch size={15}/></button>
        </div> */}
        {/* <div className="container">
            
            {
                <MealItem data={item} />
            }
        </div> */}
        <div className="Pagination">
        <Pagination data={item} itemsPerPage={itemsPerPage} />
        </div>
        {/* <div className='indexContainer'>
            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div> */}
        <div>
            <Profile/>
        </div>


        {/* <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index + 1}
                id='pagination_button'
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : "pageNumber"}
            >
                {index + 1}
            </button>
            ))}
        </div> */}
            </div>
    </>
  )
        }

export default Meal