import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar setIsOpen={setIsOpen} handleOpenMenu={handleOpenMenu} />
      <About isOpen={isOpen} />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
