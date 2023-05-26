import React from "react";
import ModalView from "./ModalView";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = ({ isOpen }) => {
  return (
    <section className="relative">
      <ModalView isOpen={isOpen} />
      <section className="aboutSection px-12  flex flex-col md:flex-row justify-center items-center">
        <div className="aboutHero flex flex-col">
          <div className="titles w-4/6">
            <div className="aboutTitle">
              <h1 className="font-bold text-xl">
                Hello! My name is Bert Gordon, I am a Full Stack Developer.
              </h1>
            </div>
            <div className="aboutSubTitle">
              I am located in Montreal, Quebec, pleased to meet you!
            </div>
          </div>
          <div className="aboutLinks mt-5">
            <a href="https://www.linkedin.com/in/bert-gordon-fsd/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Czar123-kali" className="">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="heroPicture">
          <img src="#" alt="Me!" />
        </div>
      </section>
    </section>
  );
};

export default About;
