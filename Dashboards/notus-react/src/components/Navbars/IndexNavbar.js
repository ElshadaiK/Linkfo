/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-5 py-3 navbar-expand-lg bg-customBlack shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between mr-16">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ml-4r">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase"
              ><img
              className="w-1/2"
              src={require("assets/img/logo.png").default}
              alt="..."
            />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <button
                  className="bg-main text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4r lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                <Link to="/auth/login" className="text-white text-md">
                  
                <i className="fas fa-arrow-alt-circle-right"></i> Login
                </Link>
                </button>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
}
