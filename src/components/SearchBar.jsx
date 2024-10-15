import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  
  const location = useLocation()
  const[visible,setVisible]=useState([])

 

  useEffect(()=>{
    if (location.pathname.includes('collection')) {
        setVisible(true)
        
    }
    else{
        setVisible(false)
    }

  },[location])

  return showSearch && visible? (
    <div className="border-t border-b bg-gray-50 p-4">
      <div className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-md">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-700"
          type="text"
          placeholder="Search for products..."
        />
        <FaTimes
          onClick={() => setShowSearch(false)}
          className="ml-2 text-gray-500 cursor-pointer hover:text-red-500 transition-all"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
