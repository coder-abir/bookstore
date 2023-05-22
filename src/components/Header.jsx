/* eslint-disable no-unused-vars */
import React from "react";
import { BoltIcon , BookOpenIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container container-md mx-auto bg-gray-200 px-5 py-5 flex justify-between mb-10">
      {/* logo area */}
      <Link to="/" className="inline-flex gap-5 items-center justify-between">
      
        <BookOpenIcon className="h-8 w-8 text-blue-500" />
        <span className="text-2xl font-bold text-blue-500">Book Store</span>
      </Link>
      {/* nav items area */}
      <div>
        <ul className="flex gap-5 text-[18px]  font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/books"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Books
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            About
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
