import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar
        setIsOpen={setIsOpen}
        handleOpenMenu={handleOpenMenu}
        isOpen={isOpen}
      />
      <About isOpen={isOpen} setIsOpen={setIsOpen} />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
