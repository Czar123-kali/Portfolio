import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";

const Navbar = ({ setIsOpen, handleOpenMenu }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar-mobile flex justify-between md:justify-around py-4 dark:bg-slate-700 text-white">
      <div className="mdView hidden md:block">
        <ul className="flex flex-row w-96 items-center justify-around">
          <li>
            <a href="" className="font-semibold">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              My Projects
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              My Skills
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-4 ">
        <Button variant="contained" color="success">
          Download CV
        </Button>
      </div>
      <div
        className="hamburger float-right space-y-1.5 cursor-pointer flex flex-col justify-center items-center mr-4 p-2 border-2 rounded-md border-slate-500 hover:bg-slate-400 md:hidden"
        onClick={handleOpenMenu}
        onChange={handleClickOutside}
        ref={dropdownRef}
      >
        <span className="block bg-white rounded-md w-8 h-1"></span>
        <span className="block bg-white rounded-md w-8 h-1"></span>
        <span className="block bg-white rounded-md w-8 h-1"></span>
      </div>
    </nav>
  );
};

export default Navbar;
