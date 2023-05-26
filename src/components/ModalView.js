import React from "react";

const ModalView = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="hamburgerModal md:hidden">
          <div className="modalContent absolute right-0 text-white bg-slate-700">
            <ul className="flex flex-col items-center justify-center w-44 ">
              <li className="py-2 w-full hover:bg-slate-600 flex justify-center">
                <a href="#">About Me</a>
              </li>
              <li className="py-2 w-full hover:bg-slate-600 flex justify-center">
                <a href="#">My Projects</a>
              </li>
              <li className="py-2 w-full hover:bg-slate-600 hover:rounded-sm flex justify-center">
                <a href="#">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalView;
