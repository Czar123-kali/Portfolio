import React from "react";
import ModalView from "./ModalView";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Me from "../me2.jpeg";

const About = ({ isOpen }) => {
  return (
    <section className="relative font">
      <ModalView isOpen={isOpen} />
      <section
        id="aboutSection"
        className="px-12 flex h-fit md:h-screen pt-12 dark:bg-slate-700 dark:text-white flex-col justify-center items-center md:flex-row"
      >
        <div className="aboutHero flex flex-col justify-center dark:bg-slate-600 items-center mb-4 py-8 shadow-lg rounded-xl">
          <div className="titles w-4/6 ">
            <div className="aboutTitle">
              <h1 className="font-bold text-xl">
                Hello! My name is{" "}
                <span className="text-orange-600">Bert Gordon</span>, I am a
                Full Stack Developer.
              </h1>
            </div>
            <div className="aboutSubTitle">
              I am located in{" "}
              <span className="text-orange-600">
                <b>Montreal, Quebec.</b>
              </span>{" "}
              Pleased to meet you!
            </div>
          </div>
          <div className="aboutLinks flex mt-5">
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
          </div>
        </div>
        <div className="heroPicture w-96 max-h-screen max-w-screen-sm px-8 md:hover:translate-x-3 md:hover:rotate-6 md:hover:ease-out">
          <img src={Me} alt="Me!" className="rounded-2xl shadow-xl" />
        </div>
      </section>
    </section>
  );
};

export default About;
