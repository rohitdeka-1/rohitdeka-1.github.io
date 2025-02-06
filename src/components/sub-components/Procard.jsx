const Procard = (props) => {
  return (
    <div className="relative w-[95%] sm:w-full max-w-sm mx-auto group scale-110">
      <div className="pro-card absolute lg:top-[1rem] top-[3rem] bg-[#8120d6] w-[90%] sm:w-[80%] rounded-2xl p-3 h-80 sm:h-[100%] z-0">
        <button className="bg-black w-full h-12 sm:h-10 font-poppins font-bold rounded shadow-btn2 text-xl sm:text-lg text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black border border-transparent hover:border-black z-10 relative bottom-[-15rem] sm:bottom-[-16rem]">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Project URL
          </a>
        </button>
      </div>

      <div className="relative bg-[#000000] w-[90%] sm:w-[80%] rounded-2xl p-6 h-[340px] sm:h-[320px] z-10 shadow-lg">
        <h2 className="text-white font-bold mb-4 text-xl sm:text-lg">
          {props.name}
        </h2>
        <img
          src={props.img || "/placeholder.svg"}
          alt="Project image"
          className="object-cover w-full h-[80%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Procard;
