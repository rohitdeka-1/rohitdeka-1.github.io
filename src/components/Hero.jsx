const Hero = () => {
  return (
    <div className="main flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-16 py-20 lg:py-0">

      <div className="lg:hidden w-full max-w-md mb-8">
        <div className="card bg-[#1111] border-2 border-black w-full aspect-square shadow-div rounded-2xl overflow-hidden">
          <img src="/Assets/myPhoto.jpg" alt="Rohit Deka" className="w-full h-full object-cover" />
        </div>
      </div>

      
      <div className="font-nunito-extrabold font-bold text-white text-center lg:text-left lg:w-1/2">
        <div className="flex flex-col gap-2 mb-6 lg:mb-10">
          <p className="text-4xl sm:text-5xl lg:text-[70px] leading-tight lg:leading-[4.5rem]">Hello</p>
          <p className="text-4xl sm:text-5xl lg:text-[70px] leading-tight lg:leading-[4.5rem]">I'm Rohit Deka</p>
          <p className="text-xl  sm:text-2xl font-thin mt-2">Full Stack Developer</p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
          <button className="bg-black rounded shadow-btn py-2 px-5 text-lg sm:text-xl text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black border border-transparent hover:border-black">
            Contact Me
          </button>
          <button className="bg-black rounded shadow-btn py-2 px-5 text-lg sm:text-xl text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black border border-transparent hover:border-black">
            Hire Me
          </button>
        </div>

        <div className="flex justify-center lg:justify-start gap-5 text-3xl">
          <a href="https://linkedin.com/in/rohitdekarhd" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin cursor-pointer"></i>
          </a>
          <a href="https://github.com/rohitdeka-1" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github cursor-pointer"></i>
          </a>
        </div>
      </div>


      <div className="hidden lg:flex w-1/2 h-full items-center justify-center">
        <div className="card bg-[#1111] border-2 border-black h-[550px] w-[450px] max-w-[90%] shadow-div rounded-2xl overflow-hidden">
          <img src="/Assets/myPhoto.jpg" alt="Rohit Deka" className="h-full w-full object-cover rounded-3xl p-2" />
        </div>
      </div>
    </div>
  )
}

export default Hero

