import React, { useRef, useEffect } from "react";

const ModalView = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [setIsOpen]);

  return (
    <div>
      {isOpen && (
        <div
          id="hamburgerModal"
          className="hamburgerModal fixed top-19 right-0 z-10 md:hidden"
        >
          <div
            className="modalContent absolute right-0 bg-orange-400 text-white"
            ref={modalRef}
            onMouseLeave={handleClickOutside}
          >
            <ul className="flex flex-col items-center justify-center w-44 ">
              <li className="py-2 w-full hover:bg-orange-500 flex justify-center">
                <a href="#aboutSection">About Me</a>
              </li>
              <li className="py-2 w-full hover:bg-orange-500 flex justify-center">
                <a href="#myProjectsSection">My Projects</a>
              </li>
              <li className="py-2 w-full hover:bg-orange-500 hover:rounded-sm flex justify-center">
                <a href="#mySkillsSection">Skills</a>
              </li>
              <li className="py-2 w-full hover:bg-orange-500 hover:rounded-sm flex justify-center">
                <a href="#contactMeSection">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalView;
