import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";

const Navbar = ({ isOpen, setIsOpen, handleOpenMenu }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className="navbar-mobile sticky top-0 z-10 flex justify-between items-center md:justify-around py-4 bg-orange-400 text-white">
      <div className="mdView hidden md:block">
        <ul className="flex flex-row w-96 items-center justify-between">
          <li>
            <a href="#aboutSection" className="font-semibold relative group">
              <span className="absolute block h-0.5 w-0 bg-white top-6 transition-all duration-300 group-hover:w-full"></span>
              About Me
            </a>
          </li>
          <li>
            <a
              href="#myProjectsSection"
              className="font-semibold relative group"
            >
              <span className="absolute block h-0.5 w-0 bg-white top-6 transition-all duration-300 group-hover:w-full"></span>
              My Projects
            </a>
          </li>
          <li>
            <a href="#mySkillsSection" className="font-semibold relative group">
              <span className="absolute block h-0.5 w-0 bg-white top-6 transition-all duration-300 group-hover:w-full"></span>
              My Skills
            </a>
          </li>
          <li>
            <a
              href="#contactMeSection"
              className="font-semibold relative group"
            >
              <span className="absolute block h-0.5 w-0 bg-white top-6 transition-all duration-300 group-hover:w-full"></span>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-4 ">
        <a href="/files/BertCVPDF.pdf" download>
          <Button variant="contained">Download CV</Button>
        </a>
      </div>
      <div
        className="hamburger float-right space-y-1.5 cursor-pointer flex flex-col justify-center items-center mr-4 p-2 border-2 rounded-md border-slate-100 hover:bg-orange-300 md:hidden"
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
