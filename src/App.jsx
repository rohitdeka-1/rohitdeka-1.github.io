import React from "react";
import TopHeading from "./components/TopHeading";
import About from "./components/About";
import { motion } from "motion/react";
import Cursor from "./components/subcomponents/Cursor";

function App() {
  return (
    <div className="min-h-screen p-4 bg-black h-full w-full text-justify flex flex-col items-center">
      <div className="w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto px-4"> 
      <Cursor />
        <TopHeading />
        <About />
      </div>
    </div>
  );
}

export default App;
