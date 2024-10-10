import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products ,search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [order, setOrder] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy=productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
      
    }

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category.toLowerCase())
      );
    }

    // Filter by subcategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sort products based on order
    if (order === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price); // Sort by price low to high
    } else if (order === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price); // Sort by price high to low
    }

    setFilterProducts(productsCopy);
  };

  // Apply initial filter based on products when component mounts or products change
  useEffect(() => {
    applyFilter();
  }, [products]);

  // Re-apply filter when category, subCategory, or order changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, order,showSearch,search]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter toggle */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown icon"
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-5 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="men"
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="women"
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="kids"
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* Sub-category */}
        <div
          className={`border border-gray-300 pl-5 mt-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-5 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              Top
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />
              Bottoms
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              Winters
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collection" />
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: relevant</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="high-low">Sort by: high-low</option>
          </select>
        </div>

        {/* Product map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filterProducts &&
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
