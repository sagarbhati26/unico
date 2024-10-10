import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-2 transition-opacity ease-in duration-200">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image Gallery */}
        <div className="flex flex-1 flex-col-reverse gap-4 sm:flex-row">
          <div className="flex flex-col gap-3">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product thumbnail ${index}`}
                className={`w-16 h-16 object-cover cursor-pointer border-2 rounded-md transition-transform transform hover:scale-105 ${
                  img === image ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              className="w-full max-w-lg object-cover border border-green-500 shadow-md rounded-md"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            {productData.name}
          </h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
          </div>
          <p className="text-xl font-medium text-green-600 mb-4">
            ${productData.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {productData.description}
          </p>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
