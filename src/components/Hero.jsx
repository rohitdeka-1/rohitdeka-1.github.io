import React from "react";

const Hero = () => {
  return (
    <div className="main flex grow justify-center sm:px-16">
      <div className="font-nunito-extrabold font-bold text-[50px] sm:text-[70px] w-full sm:w-[50%] h-full flex flex-col items-start justify-center text-black gap-10">
        <div className="flex flex-col gap-0 leading-[4.5rem] px-9">
          <p className="m-0">Hello</p>
          <p className="m-0">I'm Rohit Deka</p>
          <div className="text-2xl font-thin">
            <p>Full Stack Developer</p>
          </div>
        </div>

        <div className="text-xl flex items-center justify-center gap-3 flex-wrap px-10">
          <button className="bg-black rounded shadow-btn flex items-center justify-center py-2 px-5 text-xl text-white transition-all duration-500 ease-in-out   hover:bg-white hover:text-black border border-transparent hover:border-black">
            Contact Me
          </button>
          <button className="bg-black rounded shadow-btn flex items-center justify-center py-2 px-5 text-xl text-white transition-all duration-500 ease-in-out  hover:bg-white hover:text-black border border-transparent hover:border-black">
            Hire Me
          </button>
        </div>
        <div className="text-3xl flex gap-5 px-10">
          <a href="https://linkedin.com/in/rohitdekarhd" target="_blank_"><i className="fa-brands fa-linkedin cursor-pointer"></i></a>
          <a href="https://github.com/rohitdeka-1" target="_blank_"><i className="fa-brands fa-square-github cursor-pointer"></i></a>
        </div>
      </div>
      <div className="w-full sm:w-[50%] h-full flex items-center justify-center mt-8 sm:mt-0">
        <div className="card bg-[#1111] border-2  border-black sm:h-[400px] md:h-[550px] w-full sm:w-[450px] max-w-[90%] shadow-div text rounded-2xl ">
          <img
            src="public/Assets/myPhoto.jpg"
            alt="Rohit Deka"
            className="h-full rounded-3xl p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
