import React from "react";
import { MdOutlineMenu, MdOutlineLogin } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="navbar w-screen bg-primary text-primary-content shadow-md md:py-6 md:px-8">
      <div className="navbar-start font-semibold text-2xl md:text-4xl">
       <Link to="/"> Datrixz Blog</Link>
      </div>
      <div className="navbar-end">
        <div className="hidden md:block">
          <Link to="/about" className="btn btn-md btn-primary mr-6">About Me!!</Link>
          <a href="https://manage.sanity.io" className="btn btn-md btn-outline">Login</a>
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex="0">
            <MdOutlineMenu className="h-8 w-8" />
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/about">
                <IoIosPerson className="h-5 w-5" /> About Me!!
              </Link>
            </li>
            <li>
              <a href="https://manage.sanity.io">
                <MdOutlineLogin className="h-5 w-5" /> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
