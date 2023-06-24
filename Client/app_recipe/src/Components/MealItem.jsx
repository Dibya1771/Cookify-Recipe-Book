import React from 'react';
import { useNavigate } from 'react-router-dom';
const MealItem = ({data}) => {
  console.log(data);
  let navigate=useNavigate();
  // if(loading){
  //   return <h2>Loading...</h2>;
  // }
    return (
    <>
        {
            (!data)?"Not Found" :data.map(item=>{
                return(
                    <div className='card' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                    <img src={item.strMealThumb} alt='Loading'/>
                    <h3>{item.strMeal}</h3>
                    </div>
                )
            })
        }
        
    
    </>
  )
}

export default MealItem