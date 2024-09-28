import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/collection");
  };

  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10">
        <div className="text-[#414141] space-y-4">
          <div className="flex items-center gap-2">
            <span className="block w-8 md:w-11 h-[2px] bg-[#414141]"></span>
            <p className="font-medium text-sm md:text-base">Our Best Seller</p>
          </div>
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl sm:py-3 leading-relaxed">
            Latest Arrival
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShopNowClick}
              className="bg-[#414141] text-white px-4 py-2 rounded-md font-semibold text-sm md:text-base transition hover:bg-gray-800"
            >
              Shop Now
            </button>
            <span className="block w-8 md:w-11 h-[1px] bg-[#414141]"></span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-auto object-cover sm:max-w-md mx-auto"
          src={assets.hero_img}
          alt="New Arrival Product"
        />
      </div>
    </section>
  );
};

export default Hero;
