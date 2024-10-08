import React, { useState, useMemo, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch } = useContext(ShopContext);

  const NavLinkComponent = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setVisible(false)} // Ensures menu closes on mobile
      className={({ isActive }) =>
        isActive
          ? "flex flex-col items-center gap-1 text-green-700 border-b-2 border-green-700 pb-1"
          : "flex flex-col items-center gap-1 hover:text-green-700 hover:border-b-2 hover:border-green-700 pb-1 transition-all"
      }
    >
      <p>{label}</p>
    </NavLink>
  );

  const navLinks = useMemo(
    () => [
      { to: "/", label: "HOME" },
      { to: "/collection", label: "COLLECTION" },
      { to: "/about", label: "ABOUT" },
      { to: "/contact", label: "CONTACT" },
    ],
    []
  );

  return (
    <nav className="relative bg-white shadow-sm py-4 px-5">
      <div className="flex items-center justify-between font-medium">
        <Link to='/'>
          <img src={assets.logo} className="w-36" alt="Logo" />
        </Link>
        {/* Desktop NavLinks */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {navLinks.map((link) => (
            <NavLinkComponent key={link.to} to={link.to} label={link.label} />
          ))}
        </ul>

        {/* Icons: Search, Profile, Cart, Menu */}
        <div onClick={() => setShowSearch(!showSearch)} className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
            alt="Search"
            aria-label="Search"
          />

          <div className="group relative">
            <img
              className="w-5 cursor-pointer hover:opacity-80 transition-opacity"
              src={assets.profile_icon}
              alt="Profile"
              aria-label="Profile"
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
              aria-label="Cart"
            />
          </Link>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden hover:opacity-80 transition-opacity"
            alt="Menu"
            aria-label="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
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
            aria-label="Close Menu"
          />
        </div>
        <ul className="flex flex-col gap-5 text-gray-700">
          {navLinks.map((link) => (
            <NavLinkComponent key={link.to} to={link.to} label={link.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
