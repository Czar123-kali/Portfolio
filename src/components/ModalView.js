import React from "react";

const ModalView = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="hamburgerModal md:hidden">
          <div className="modalContent absolute right-0 bg-orange-400 text-white">
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
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalView;
