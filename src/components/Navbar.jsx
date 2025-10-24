import React, {  useContext } from "react";

import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("LogOut Succesfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const links = (
    <>
      <li className="font-bold text-[16px]">
        <NavLink to="/">Home</NavLink>
      </li>     
        <li className="font-bold text-[16px]">
          <NavLink to="/managecourses">Courses</NavLink>
        </li>     
        <li className="font-bold text-[16px]">
          <NavLink to="/addcourses">Add Courses</NavLink>
        </li>     
        <li className="font-bold text-[16px]">
          <NavLink to="/myenrolledcourses">EnrolledCourses</NavLink>
        </li>     
      <li className="font-bold text-[16px]">
        <Link to="/#about">About</Link>
      </li>      
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-50 bg-[#1E88E5]">
      <div className="w-full px-2 md:px-8 lg:px-10">
        <div className="max-w-[1400px] mx-auto ">
          <div className="navbar w-full mx-auto ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content  rounded-box shadow mt-3 w-52 p-2 z-50 text-white"
                >
                  {links}
                </ul>
              </div>
              <img className="w-8" src="/nav-logo.png" alt="" />
              <Link to="/" className=" text-2xl font-bold text-white">
                CourseHub
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
            </div>

            <div className="navbar-end">
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <img
                      className="rounded-full w-10 h-10 object-cover"
                      src={user.photoURL || "/user.png"}
                      alt="Profile"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  rounded-box shadow p-2 w-32"
                  >
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="lg:inline-block relative text-lg group  px-6 py-3 transition-all"
                      >
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#1E88E5] transition-colors duration-300 ease-out   rounded-lg group-hover:text-white hover:border-2">
                          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-yellow-400 text-white"></span>
                          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1E88E5] group-hover:-rotate-180 ease"></span>
                          <span className="relative font-bold">Logout</span>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="lg:inline-block relative text-lg group   py-3 transition-all"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#1E88E5] transition-colors duration-300 ease-out   rounded-lg group-hover:text-white border-2">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white text-white"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1E88E5] group-hover:-rotate-180 ease"></span>
                      <span className="relative font-bold">Sign In</span>
                    </span>
                  </Link>

                  <Link
                    to="/register"
                    className="lg:inline-block relative text-lg group   py-3 transition-all"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out   rounded-lg group-hover:text-[#1E88E5]  border-2 border-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#1E88E5] text-[#1E88E5]"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                      <span className="relative font-bold">Sign Up</span>
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
