import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [sticky, setSticky]=useState(false)
  
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true);
      }else{
        setSticky(false)
      }
    }
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  return (
    <>
      <div className={`navbar  top-0 z-40 w-screen shadow fixed ${sticky?"shadow-md bg-base-300 duration-300 transition-all ease-in-out":""}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>BMI</a>
              </li>
              <li>
                <a>Diet chart</a>
              </li>
              <li>
                <a>Workout</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            Fitness
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>BMI</a>
            </li>
            <li>
              <a>Diet chart</a>
            </li>
            <li>
              <a>Workout</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-black text-white">Join Now</a>
        </div>
        {toggle ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
