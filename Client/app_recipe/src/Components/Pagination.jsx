import React, { useState, useEffect } from "react";
import MealItem from "./Card";
import Typewriter from "typewriter-effect";
import SearchIcon from "@mui/icons-material/Search";

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pageNumbers = [];

  // Calculate total pages based on filtered data length
  const filteredData = data.filter((item) => {
    if (item && item.title) {
      const itemValue = item.title.toLowerCase();
      return itemValue.includes(searchQuery.toLowerCase());
    }
    return false;
  });
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Slice data based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = filteredData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search query change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="search-container">
        <input
          id="n_search"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <SearchIcon id="n_icon" />
        <p className="ss_typing-animation" style={{marginTop:'2rem',fontFamily:'courier',fontWeight:'600', zIndex:'999',color:'white'}}>
          
          <Typewriter style={{marginTop:"0rem;"}}
            options={{
              strings: [
                "Welcome to Cookify, your ultimate culinary destination! ",
                "Where you can indulge in the art of cooking and create delicious memories together!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>

        <h2 id="n_header">Meal Details</h2>
      <div className="container">
        {!searchQuery ? (
          <MealItem data={slicedData} />
        ) : (
          <MealItem data={filteredData} />
        )}
      </div>

      {/* Render pagination buttons */}
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            disabled={currentPage === number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
