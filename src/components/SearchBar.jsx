import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
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
       
      </div>
    </div>
  ) : null;
};

export default SearchBar;
