import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative bg-white shadow-sm py-4 px-5">
      <div className="flex items-center justify-between font-medium">
      
        <img src={assets.logo} className="w-36" alt="Logo" />

      
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center gap-1 text-green-700 border-b-2 border-green-700 pb-1"
                : "flex flex-col items-center gap-1 hover:text-green-700 hover:border-b-2 hover:border-green-700 pb-1 transition-all"
            }
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center gap-1 text-green-700 border-b-2 border-green-700 pb-1"
                : "flex flex-col items-center gap-1 hover:text-green-700 hover:border-b-2 hover:border-green-700 pb-1 transition-all"
            }
          >
            <p>COLLECTION</p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center gap-1 text-green-700 border-b-2 border-green-700 pb-1"
                : "flex flex-col items-center gap-1 hover:text-green-700 hover:border-b-2 hover:border-green-700 pb-1 transition-all"
            }
          >
            <p>ABOUT</p>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center gap-1 text-green-700 border-b-2 border-green-700 pb-1"
                : "flex flex-col items-center gap-1 hover:text-green-700 hover:border-b-2 hover:border-green-700 pb-1 transition-all"
            }
          >
            <p>CONTACT</p>
          </NavLink>
        </ul>

        
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
            alt="Search"
          />

          <div className="group relative">
            <img
              className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
              src={assets.profile_icon}
              alt="Profile"
            />
            <div className="group-hover:block hidden absolute right-0 top-full mt-2 py-3 px-5 bg-white shadow-lg rounded-lg">
              <p className="cursor-pointer hover:text-green-700">My Profile</p>
              <p className="cursor-pointer hover:text-green-700">Orders</p>
              <p className="cursor-pointer hover:text-green-700">Login</p>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
              alt="Cart"
            />
          </Link>

          
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden hover:opacity-80 transition-opacity"
            alt="Menu"
          />
        </div>
      </div>

    
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg p-5 transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        } sm:hidden w-4/5`}
      >
        <div className="flex justify-end mb-6">
          <img
            onClick={() => setVisible(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col gap-5 text-gray-700">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-green-700"
                : "flex items-center gap-2 hover:text-green-700 transition-all"
            }
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-green-700"
                : "flex items-center gap-2 hover:text-green-700 transition-all"
            }
          >
            <p>Collection</p>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-green-700"
                : "flex items-center gap-2 hover:text-green-700 transition-all"
            }
          >
            <p>About</p>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-green-700"
                : "flex items-center gap-2 hover:text-green-700 transition-all"
            }
          >
            <p>Contact</p>
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-green-700"
                : "flex items-center gap-2 hover:text-green-700 transition-all"
            }
          >
            <p>Profile</p>
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-green-700"
                : "flex items-center gap-2 hover:text-green-700 transition-all"
            }
          >
            <p>Cart</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
