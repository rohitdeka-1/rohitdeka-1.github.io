import React, { useState, useEffect } from "react";
import ShowCard from "./subcomponents/ShowCard";

const TopHeading = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 w-full flex flex-row justify-center items-center lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto   ">
      <div className="max-w-xs md:max-w-md lg:max-w-lg">
        <h1 className="mt-5 font-poppins font-semibold text-3xl text-white">
          Hi, I'm Rohit ⚡
        </h1>
        <p className="mt-5 text-gray-300">Developer</p>

        <div className="mt-3 flex gap-1 flex-wrap">
          <ShowCard name="📍 Assam, Guwahati" />
          <ShowCard name={`🕒 ${currentTime}`} />
          <ShowCard
            name={
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="13"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <span>
                  <a href="https://linkedin.com/in/rohitdekarhd" target="_blank">
                    LinkedIn
                  </a>
                </span>
              </div>
            }
          />
        </div>
      </div>

      {/* Right Section (GIF) */}
      <div className="flex justify-end items-center w-1/2">
        <img
          className=" w-28 sm:w-28 md:w-28 lg:w-32 xl:w-38 2xl:w-29 rounded-3xl"
          src="/Assets/omen-img.jpg"
          alt="Omen GIF"
        />
      </div>
    </div>
  );
};

export default TopHeading;
