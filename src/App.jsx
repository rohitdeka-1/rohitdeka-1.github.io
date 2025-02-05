import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <section className="h-screen bg-[#20a3cf] flex flex-col pt-[70px]">
        <Hero />
      </section>
      <section className="h-screen bg-[#FADA5E] flex justify-center items-center">
        <About/>
      </section>
    </>
  );
}

export default App;
