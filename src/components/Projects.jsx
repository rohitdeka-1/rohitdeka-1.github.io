import Procard from "./subcomponents/Procard";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: (direction) => ({
    opacity: 0,
    scale: 0.95,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    y: direction === "up" ? -30 : direction === "down" ? 30 : 0,
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = ({target}) => {
  return (
    <>
      <h1 id={target} className="text-white font-geist text-2xl mt-3 font-bold">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-3 w-full max-w-screen-xl mx-auto">
        <motion.div
          variants={fadeInVariants}
          custom="left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Procard
            link="https://music-player-react-pearl.vercel.app/"
            img="/Assets/image.png"
            name="MusicAPP"
            description="A fully functional music player built with React, featuring an intuitive UI and smooth playback."
            tags={["React", "JavaScript", "Audio API"]}
            className="h-40 sm:h-48"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          custom="right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Procard
            link="https://react-todo-list-3lhk.vercel.app/"
            img="/Assets/TodoList.png"
            name="TodoList"
            description="A simple task management app that lets you add, edit, and delete tasks easily."
            tags={["React", "Hooks", "LocalStorage"]}
            className="h-40 sm:h-48"
          />
        </motion.div>
        
        <motion.div
          variants={fadeInVariants}
          custom="left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Procard
            link="https://rhd-temp.vercel.app/"
            img="/Assets/image999.png"
            name="WeatherApp"
            description="A simple weather app using an API to fetch real-time weather data with a clean UI."
            tags={["React", "Weather API", "CSS"]}
            className="h-40 sm:h-48"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          custom="right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Procard
            link="https://deka-gpt.vercel.app"
            img="/Assets/Gpt-chat.png"
            name="ChatBot(API)"
            description="An AI-powered chatbot that uses an external API to process and respond to user queries."
            tags={["React", "AI API", "JavaScript"]}
            className="h-40 sm:h-48"
          />
        </motion.div>
        
        <motion.div
          className="col-span-2"
          variants={fadeInVariants}
          custom="up"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Procard
            link="https://chat-app-seven-dun.vercel.app/"
            img="/Assets/ChatApp.png"
            name="ChatApp"
            description="A real-time chat application using WebSockets for seamless messaging."
            tags={["React", "Socket.io", "MongoDB"]}
            className="h-48 sm:h-56"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Projects;