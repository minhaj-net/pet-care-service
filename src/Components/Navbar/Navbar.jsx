import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import "animate.css";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast;

        if (location.pathname === "/profile") {
          navigate("/login");
        }
      })
      .catch(() => {
        toast.error("Something went wrong while logging out!");
      });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <div>
      <div className="navbar max-w-7xl mx-auto bg-base-100 shadow-md px-5 sticky top-0 z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  {item.name === "My Profile" && !user ? (
                    <button
                      disabled
                      className="opacity-50 cursor-not-allowed text-gray-400"
                      title="Login to access Profile"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `transition duration-300 ${
                          isActive
                            ? "text-pink-400 font-semibold underline underline-offset-4"
                            : "hover:text-pink-400"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/kgKr0fv8/408b8be30984bdd7579416a6cb114275.jpg"
              alt="Logo"
              className="w-14 h-14 rounded-full"
            />
            <span className="text-xl font-bold text-pink-500">PetCare</span>
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.name === "My Profile" && !user ? (
                  <button
                    disabled
                    className="opacity-50 cursor-not-allowed text-gray-400"
                    title="Login to access Profile"
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition duration-300 ${
                        isActive
                          ? "text-pink-400 font-semibold border-b-2 border-pink-400 pb-1"
                          : "hover:text-pink-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="relative group cursor-pointer">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-pink-400 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 opacity-0 group-hover:opacity-100 bg-base-200 text-sm font-semibold text-primary px-3 py-1 rounded-lg shadow-md transition-all duration-300 whitespace-nowrap">
                  {user.displayName}
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogOut}
                className="btn px-8 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
              >
                Log Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn px-8 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
