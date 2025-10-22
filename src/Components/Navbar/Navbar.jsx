import React from "react";
import { NavLink } from "react-router";
import 'animate.css';

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md px-5 sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive
                        ? "text-primary font-semibold underline underline-offset-4"
                        : "hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-primary">PetCare</span>
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-primary font-semibold border-b-2 border-primary pb-1"
                      : "hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink
          to="/login"
          className="btn px-8 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 "
        >
          <span className="absolute inset-0 w-full h-full transition-transform duration-500 transform scale-x-0 origin-left bg-secondary group-hover:scale-x-100"></span>
          <span className="relative z-10 group-hover:text-black  transition-all duration-300">
            Login
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
