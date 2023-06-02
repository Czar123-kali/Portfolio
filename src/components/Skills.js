import React from "react";
import { ReactComponent as BootstrapIcon } from "../svgs/bootstrap.svg";
import { ReactComponent as CSSIcon } from "../svgs/css3.svg";
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
import { ReactComponent as MongoIcon } from "../svgs/mongodb.svg";
import { ReactComponent as CSharpIcon } from "../svgs/csharp.svg";
import { ReactComponent as NodeIcon } from "../svgs/nodejs.svg";
import { ReactComponent as ExpressIcon } from "../svgs/express.svg";

const Skills = () => {
  return (
    <section
      id="mySkillsSection"
      className="bg-slate-50 skillsSection dark:bg-slate-700 dark:text-white pt-56"
    >
      <h1 className="skillsTitle flex justify-center font-mono text-6xl gap-6">
        My <span className="text-orange-400"> Skills</span>
      </h1>
      <div className="skillsCardSection flex justify-center pt-56 pb-16">
        <div className="skillsCard  bg-orange-400 w-full shadow-lg p-6">
          <div className="frontEndSkills flex flex-col justify-center items-center">
            <h1 className="py-12 text-5xl font-mono">Front-End</h1>
            <div className="icons flex flex-col md:flex-row items-center flex-wrap gap-4">
              <HTMLIcon className="w-32 h-32 md:w-38 md:h-38 2xl:w-48" />
              <CSSIcon className="w-32 h-32 md:w-38 md:h-38" />
              <JavascriptIcon className="w-32 h-32 md:w-38 md:h-38" />
              <ReactIcon className="w-32 h-32 md:w-38 md:h-38" />
              <BootstrapIcon className="w-32 h-32 md:w-38 md:h-38" />
              <TailwindIcon className="w-32 h-32 md:w-38 md:h-38" />
            </div>
          </div>
          <div className="backEndSkills flex flex-col justify-center items-center">
            <h1 className="py-12 text-5xl font-mono">Back-End</h1>
            <div className="icons flex flex-col md:flex-row items-center flex-wrap gap-4">
              <JavaIcon className="w-32 h-32 md:w-38 md:h-38" />
              <SpringIcon className="w-32 h-32 md:w-38 md:h-38" />
              <PhpIcon className="w-32 h-32 md:w-38 md:h-38" />
              <NodeIcon className="w-32 h-32 md:w-38 md:h-38" />
              <ExpressIcon className="w-32 h-32 md:w-38 md:h-38" />
              <CSharpIcon className="w-32 h-32 md:w-38 md:h-38" />
            </div>
          </div>
          <div className="miscSkills flex flex-col justify-center items-center pb-8">
            <h1 className="py-12 text-5xl font-mono text-center">
              Databases & Other
            </h1>
            <div className="icons flex flex-col md:flex-row items-center flex-wrap gap-4">
              <MongoIcon className="w-32 h-32 md:w-38 md:h-38" />
              <MySqlIcon className="w-32 h-32 md:w-38 md:h-38" />
              <NpmIcon className="w-32 h-32 md:w-38 md:h-38" />
              <GithubSvgIcon className="w-32 h-32 md:w-38 md:h-38" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
