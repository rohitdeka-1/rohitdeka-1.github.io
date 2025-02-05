import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-screen bg-[#FADA5E] flex flex-col">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen bg-[#FADA5E] flex justify-center items-center">
        <div className="h-[84%] w-[85%] bg-blue-600 rounded-xl flex justify-center items-center">
          <div className="bg-black w-[50%] h-full">Image</div>
          <div className="bg-red-400 w-[50%] h-full flex flex-col items-center justify-center">
            <h1 className="bg-green-400 w-full h-1/2">Name</h1>
            <p className="bg-yellow-500 w-full h-1/2"> This is paragraph</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
