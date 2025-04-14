import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowRight, Youtube } from "lucide-react";

const GRID_SIZE = 28;

const ShowCase = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: GRID_SIZE }, () => Math.random() > 0.5)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(Array.from({ length: GRID_SIZE }, () => Math.random() > 0.5));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2 md:gap-3 lg:gap-2 p-4 w-full max-w-screen-xl mx-auto">
      <div className="col-span-2 md:col-span-3 lg:col-span-7">
        <a
          href="https://github.com/rohitdeka-1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <div
            className="rounded-xl p-4 flex flex-col items-start text-white relative overflow-hidden transition-all hover:bg-opacity-80 md:h-[180px] lg:h-[220px]"
            style={{
              backgroundImage: "url('/Assets/gh.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            <Github size={24} className="relative z-10" />
            <p className="relative z-10 text-sm">GitHub</p>
            <p className="relative z-10 text-xs text-gray-300">
              My Codebases 🌌
            </p>
          </div>
        </a>
      </div>

      <div
        className="col-span-2 md:col-span-3 lg:col-span-3 bg-gray-800 rounded-xl p-4 flex flex-wrap gap-1 justify-center relative overflow-hidden transition-all hover:bg-gray-700 md:h-[180px] lg:h-[220px]"
        style={{
          backgroundImage: "url('/Assets/grid-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <div className="relative z-10 flex flex-wrap justify-center items-center gap-1 md:gap-2">
          {grid.map((isGreen, index) => (
            <div
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-all duration-500 ${
                isGreen ? "bg-green-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <a href="/" className="block w-full h-full">
          <div className="bg-gray-700 hover:bg-gray-800 rounded-xl p-4 flex flex-col justify-center items-center transition-all md:h-[120px] lg:h-[140px]">
            <ArrowRight size={20} className="text-white" />
            <p className="text-white text-xs mt-1">About</p>
          </div>
        </a>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-5">
        <a
          href="https://www.linkedin.com/in/rohitdekarhd"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <div className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 flex flex-col justify-center items-center text-white transition-all md:h-[120px] lg:h-[140px]">
            <Linkedin size={20} />
            <p className="text-xs mt-1">Connect</p>
          </div>
        </a>
      </div>

      <div className="col-span-2 md:col-span-2 lg:col-span-3">
        <a
          href="https://www.youtube.com/rohitdekarhd1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <div className="bg-red-600 hover:bg-red-700 rounded-xl p-4 flex flex-col justify-center items-center text-white transition-all md:h-[120px] lg:h-[140px] cursor-pointer">
            <Youtube size={20} />
            <p className="text-xs mt-1">YouTube Channel</p>
          </div>
        </a>
      </div>

      <div className="col-span-4 md:col-span-6 lg:col-span-10">
        <a
          href="https://discord.gg/UrtddArpGj"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <div
            className="rounded-xl p-6 flex flex-col justify-center items-start text-white relative overflow-hidden transition-all hover:bg-opacity-80 md:h-[200px] lg:h-[220px]"
            style={{
              backgroundImage: "url('/Assets/dc.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
            <p className="relative z-10 text-sm pl-4">Join Discord</p>
            <p className="relative z-10 text-gray-300 text-xs pl-4">
              Be part of the community!
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ShowCase;
