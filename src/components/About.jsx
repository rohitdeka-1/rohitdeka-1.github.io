import React from "react";

const About = () => {
  return (
    <div className="mt-10 w-full">
      <h1 className="text-white font-geist text-2xl font-bold">About</h1>
      <p className="mt-3 text-gray-300 font-poppins text-md">
        I am Rohit Deka, a passionate full-stack developer focusing on Reactjs
        and Nodejs . I love solving problems and building scalable web
        applications. Currently student at{" "}
        <a
          className="underline underline-offset-2 font-semibold"
          href="https://vitbhopal.ac.in/"
        >
          Vit Bhopal University
        </a>
        , passionate about building seamless, scalable applications. I enjoy
        writing intuitive Frontend and Structure Backend. Beyond coding,  I have a deep passion
        for music and enjoy playing the guitar and singing. I also love working
        with drones, experimenting with aerial technology, and exploring new
        possibilities in drone applications.
      </p>
    </div>
  );
};

export default About;
