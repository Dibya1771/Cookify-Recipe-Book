    // import React from 'react';
    // const Pagination=({item,itemsPerPage,totalItems ,paginate,handleLogic})=>{
    // const pageNumbers=[];

    // for( let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++)
    // {
    //     pageNumbers.push(i);
    // }


    // return(
    //     <nav className='pagination'>
    //         <ul>
    //             {pageNumbers.map(number=>(
    //                 <li key={number}>
    //                     <button  onClick={()=>{
    //                         paginate(number)
    //                         handleLogic(item,number)
    //                     }}>
    //                         {number}
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </nav>
    // );
    // }
    // // const getData = async () => {
    // //     let url = `http://localhost:8080/user?_page=${currentPage}&_limit=10`;
    // //     if (searchQuery) {
    // //       url += `&q=${searchQuery}`;
    // //     }
    
    // //     const response = await fetch(url, {
    // //       method: "GET",
    // //     });
    
    // //     const data = await response.json();
    // //     const totalCount = response.headers.get("X-Total-Count");
    // //     const totalPages = Math.ceil(totalCount / 10);
    
    // //     setArr(data);
    // //     setTotalPages(totalPages);
    // //   };


    // //   <div className="pagination">
    // //   {Array.from({ length: totalPages }, (_, index) => (
    // //       <button
    // //          key={index + 1}
    // //          id='pagination_button'
    // //          onClick={() => handlePageChange(index + 1)}
    // //          className={currentPage === index + 1 ? "active" : "pageNumber"}
    // //        >
    // //          {index + 1}
    // //        </button>
    // //      ))}
    // //    </div>
    // // export default Pagination;
    // // import React from 'react'

    // // const Pagination = () => {
    // //   return (
    // //     <div>Pagination</div>
    // //   )
    // // }

    // export default Pagination
    import React, { useState, useEffect } from 'react';
    import MealItem from './MealItem';
    const Pagination = ({ data, itemsPerPage }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(data.length / itemsPerPage);
        const [searchQuery, setSearchQuery] = useState('');
        const pageNumbers=[]
        for( let i=1;i<=totalPages;i++)
            {
                pageNumbers.push(i);
            }
    
        // Slice data based on current page and items per page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = data.slice(startIndex, endIndex);
      
        // Handle page change
        const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
        };
      
         // Handle search query change
        const handleSearch = (event) => {
          setSearchQuery(event.target.value);
          setCurrentPage(1);
        };

        // Filter data based on search query (excluding the current page items)
        const filteredData = data.filter((item) =>
        item.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (

            <div>
              <input type="text" value={searchQuery} onChange={handleSearch} />

              <div className="container">
            
                    {
                        !searchQuery?<MealItem data={slicedData}/>:<MealItem data={filteredData} />
                    }
                </div>
            
      
            {/* Render pagination buttons */}
            <div>
              {pageNumbers.map((number)=>(
                        <button key={number} onClick={()=>
                          handlePageChange(number)}
                          disabled={currentPage === number}>
                            {number}
                        </button>
                ))}


            </div>
          </div>
        );
      };
      export default Pagination;