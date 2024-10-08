import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo and description */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quisquam vel sapiente veniam consequuntur reprehenderit perspiciatis
            earum dicta minima molestiae, ipsum soluta nihil fuga incidunt in
            ullam rerum quis sit.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/" className="hover:text-green-500 transition-all">Home</a></li>
            <li><a href="/about" className="hover:text-green-500 transition-all">About Us</a></li>
            <li><a href="/delivery" className="hover:text-green-500 transition-all">Delivery</a></li>
            <li><a href="/privacy" className="hover:text-green-500 transition-all">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="tel:+91123456789" className="hover:text-green-500 transition-all">+91-123456789</a></li>
            <li><a href="mailto:abc@abc.com" className="hover:text-green-500 transition-all">abc@abc.com</a></li>
          </ul>
        </div>
      </div>

    
      <div className="mt-10">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 unico.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
