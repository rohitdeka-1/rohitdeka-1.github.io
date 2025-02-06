const About = () => {
  return (
    <div className="h-full w-full flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-6xl bg-blue-600 flex flex-col lg:flex-row justify-center items-center rounded-3xl p-4 sm:p-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="card border-2 border-black w-full max-w-[360px] aspect-square rounded-2xl shadow-div overflow-hidden">
            <img src="/Assets/myPhoto.jpg" alt="Rohit Deka" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="font-poppins w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-4 lg:mb-8 leading-[1rem]">About me</h1>
          <p className="text-xl  text-gray  ">Full Stack Developer</p>
          <div className="flex flex-col gap-4 ">
            <p className="text-[#f0ecec] font-semibold  text-base sm:text-lg">
              Hi, I'm Rohit Deka, a passionate Full Stack Developer with a strong foundation in React, Node.js, and
              Express. Currently pursuing an Integrated M.Tech in CSE AI Specialization at VIT Bhopal, I love building
              dynamic web applications and exploring new technologies. When I'm not coding, you'll find me playing
              guitar or working with drones. I'm always eager to learn and take on new challenges in web development.
              Let's connect and build something amazing together!
            </p>
            <a
              href="https://linkedin.com/in/rohitdekarhd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black font-bold rounded shadow-btn text-center py-2 px-5 text-lg sm:text-xl text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black border border-transparent hover:border-black mt-4"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

