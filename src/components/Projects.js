import React from "react";
import StockPortfolioPicture from "../StockPortfolio.png";
import { ReactComponent as BootstrapIcon } from "../svgs/bootstrap.svg";
import { ReactComponent as CSSIcon } from "../svgs/css3.svg";
import { ReactComponent as GitIcon } from "../svgs/git.svg";
import { ReactComponent as GithubSvgIcon } from "../svgs/githubsvg.svg";
import { ReactComponent as HTMLIcon } from "../svgs/html.svg";
import { ReactComponent as JavaIcon } from "../svgs/javasvg.svg";
import { ReactComponent as MySqlIcon } from "../svgs/mysqlsvg.svg";
import { ReactComponent as NpmIcon } from "../svgs/npmsvg.svg";
import { ReactComponent as PhpIcon } from "../svgs/phpsvg.svg";
import { ReactComponent as ReactIcon } from "../svgs/react.svg";
import { ReactComponent as SpringIcon } from "../svgs/springbootsvg.svg";
import { ReactComponent as TailwindIcon } from "../svgs/tailwindsvg.svg";
import { ReactComponent as JavascriptIcon } from "../svgs/javascript.svg";

const Projects = () => {
  return (
    <section
      id="myProjectsSection"
      className="dark:bg-slate-700 dark:text-white pt-24 md:pt-0 px-8"
    >
      <div className="divider flex justify-center text-6xl font-mono">
        <h1>
          Here are some of my <span className="text-orange-600">projects</span>
        </h1>
      </div>
      <div className="projectCardSections pt-24 flex justify-center pb-8">
        <div className="projectCard shadow-xl flex-col md:flex-row py-4 dark:bg-slate-600 flex justify-between items-center rounded-lg">
          <div className="cardLeftSide text-md md:text-xl order-2 md:order-1 w-full flex flex-col px-4 gap-8">
            <div className="projectTitle font-bold">
              <h2>
                <span className="text-orange-500">
                  Stock Market Personal Wallet
                </span>
              </h2>
            </div>
            <div className="projectDescription">
              <h4>
                The goal of this project was to create a fully functional app
                that allows the user to fetch data from stocks they purchased
                and receive real-time P&L data updates
              </h4>
            </div>
            <div className="skillsUsed flex flex-row gap-1 items-center">
              <h1>Stack | </h1>
              <BootstrapIcon className="w-6 h-6 md:w-10 md:h-10" />
              <HTMLIcon className="w-6 h-6 md:w-10 md:h-10" />
              <CSSIcon className="w-6 h-6 md:w-10 md:h-10" />
              <PhpIcon className="w-6 h-6 md:w-10 md:h-10" />
              <GitIcon className="w-6 h-6 md:w-10 md:h-10" />
              <JavascriptIcon className="w-6 h-6 md:w-10 md:h-10" />
            </div>
          </div>
          <div className="cardRightSide order-1 md:order-2 w-full px-4 pb-6 md:pb-0">
            <div className="projectImage">
              <img
                src={StockPortfolioPicture}
                alt="Stock Wallet Project"
                className="rounded-lg"
              />
            </div>
            <div className="projectLinks"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;