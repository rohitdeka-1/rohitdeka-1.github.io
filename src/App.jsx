import React from "react";
import TopHeading from "./components/TopHeading";
import About from "./components/About";
import { motion } from "motion/react";
import Cursor from "./components/subcomponents/Cursor";
import TechStack from "./components/TechStack";
import BlurEffect from "./components/subcomponents/BlurEffect";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BlurEffect>
      <div className="min-h-screen p-3 bg-black h-full w-full text-justify flex flex-col items-center">
        <div className="w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto px-4">
          <Cursor />
          <TopHeading />
          <About />
          <TechStack />
          <NavBar/>
        </div>
      </div>
    </BlurEffect>
  );
}

export default App;
