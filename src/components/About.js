import React, { useEffect, useState, useRef } from "react";
import ModalView from "./ModalView";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Me from "../me2.jpeg";
import { IoIosArrowDown } from "react-icons/io";

const About = ({ isOpen }) => {
  const [moreInfo, setMoreInfo] = useState("false");
  const arrowButton = useRef(null);

  const handleMoreInfo = (e) => {
    setMoreInfo(!moreInfo);
  };

  return (
    <section className="relative font">
      <ModalView isOpen={isOpen} />
      <section
        id="aboutSection"
        className="px-6 flex h-fit md:h-screen pt-24 md:pt-0 dark:bg-slate-700 dark:text-white flex-col justify-center items-center md:flex-row bg-slate-50"
      >
        {moreInfo ? (
          <div className="aboutHero flex flex-col justify-center bg-slate-50 dark:bg-slate-600 items-center mb-4 py-8 shadow-xl rounded-xl">
            <div className="titles w-4/6">
              <div className="aboutTitle">
                <h1 className="font-bold text-xl">
                  Hello! My name is{" "}
                  <span className="text-orange-500">Bert Gordon</span>, I am a
                  Full Stack Developer.
                </h1>
              </div>
              <div className="aboutSubTitle">
                I am located in{" "}
                <span className="text-orange-500">
                  <b>Montreal, Quebec.</b>
                </span>{" "}
                Pleased to meet you!
              </div>
            </div>
            <div className="aboutLinks flex mt-5 relative">
              <a
                href="https://www.linkedin.com/in/bert-gordon-fsd/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Czar123-kali"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <div
                className={`moreInfo absolute -bottom-12 right-0 p-1 dark:bg-slate-500 bg-slate-300 rounded-full ${
                  moreInfo ? "animate-rotate-down" : "animate-rotate-up"
                }`}
                onClick={(e) => handleMoreInfo(e.target)}
                ref={arrowButton}
              >
                <IoIosArrowDown size={30} />
              </div>
            </div>
          </div>
        ) : (
          <div className="aboutHero md:w-2/6 flex flex-col justify-center bg-slate-50 dark:bg-slate-600 items-center mb-4 py-8 shadow-xl rounded-xl">
            <div className="titles w-4/6">
              <div className="aboutMeExt font-bold text-xl">
                <h2>
                  I am a complete developer -- able to excel in a team or alone
                  and am excited to level up my knowledge and skills at coding
                  in a knowledgeable team.
                </h2>
              </div>
            </div>
            <div className="aboutLinks flex mt-5 relative">
              <a
                href="https://www.linkedin.com/in/bert-gordon-fsd/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Czar123-kali"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <div
                className={`moreInfo absolute -bottom-12 right-0 p-1 dark:bg-slate-500 bg-slate-300 rounded-full ${
                  moreInfo ? "animate-rotate-down" : "animate-rotate-up"
                }`}
                onClick={(e) => handleMoreInfo(e.target)}
                ref={arrowButton}
              >
                <IoIosArrowDown size={30} />
              </div>
            </div>
          </div>
        )}

        <div className="heroPicture w-96 max-h-screen max-w-screen-sm px-8 md:pt-0 pt-8 md:hover:translate-x-4 md:hover:rotate-12 md:hover:ease-out">
          <img src={Me} alt="Me!" className="rounded-2xl shadow-xl" />
        </div>
      </section>
    </section>
  );
};

export default About;
