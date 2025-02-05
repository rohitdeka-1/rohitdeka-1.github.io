
const About = () => {
  return (
    
      <div className="h-[84%] w-[85%] bg-blue-600 flex justify-center items-center rounded-3xl p-4">
          <div className="sm:w-[50%] w-[50%]">
            <div className="w-full sm:w-[100%] h-[50%] flex items-center justify-center mt-8 sm:mt-0">
              <div className="card border-2  border-black sm:h-[400px] md:h-[440px] w-full sm:w-[360px] max-w-[90%] text rounded-2xl shadow-div">
                <img
                  src="/Assets/myPhoto.jpg"
                  alt="Rohit Deka"
                  className="h-full rounded-3xl p-2"
                />
              </div>
            </div>
          </div>

          <div className="font-poppins w-[50%] h-full flex flex-col items-center justify-center py-7">
            <h1 className="w-full h-[20%] flex justify-left items-center text-white font-bold text-[59.0px]">
              About me
            </h1>
            <p className="w-full h-[80%] flex flex-col gap-5">
              <h1 className="text-xl leading-3">Full Stack Developer</h1>
              <p className="py-4 mr-10 text-[#f0ecec] font-semibold text-[17.61px] justify-center">
                Hi I'm Rohit Deka a passionate Full Stack Developer with a
                strong foundation in React Node.js and Express Currently
                pursuing an Integrated M.Tech in CSE AI Specialization at VIT
                Bhopal I love building dynamic web applications and exploring
                new technologies When I'm not coding you'll find me playing
                guitar or working with drones I'm always eager to learn and take
                on new challenges in web development Let's connect and build
                something amazing together
              </p>
              <button className="bg-black w-[50%] font-bold rounded shadow-btn flex items-center justify-center py-2 px-5 text-xl text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black border border-transparent hover:border-black">
                <a href="https://linkedin.com/in/rohitdekarhd" target="_blank_">
                  Connect
                </a>
              </button>
            </p>
          </div>
        </div>
    
  )
}

export default About
