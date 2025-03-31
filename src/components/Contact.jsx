import { motion } from "framer-motion";
import { Send } from "lucide-react";
import BlurEffect from "./subcomponents/BlurEffect";

const ContactPage = () => {
  return (
    <BlurEffect>
      <div className="flex  flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-[#0a1c2233] to-black p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl font-Geist font-extrabold mb-6"
        >
          Contact Me
        </motion.h1>
        <motion.form 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="from-[#0a1c2233] to-black  bg-opacity-80 p-8  rounded-4xl shadow-lg w-full max-w-lg"
        >
          <div className="mb-4 ">
            <label className="block text-gray-300 font-Geist font-semibold mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-Geist font-semibold  mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#64d3ffbd]"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-Geist font-semibold  mb-1">Your Message</label>
            <textarea
              className="w-full px-4 py-3 h-40 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#64d3ffbd] resize-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            className="w-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-[#64d3ffbd] text-white font-bold py-2 px-4 rounded-lg transition-all relative"
          >
            Send
            <motion.div
              className="absolute right-4"
              initial={{ x: 0 }}
              animate={{ 
                x: [-400, -10, 20, 0],
                y: [0, -15, 5, 0],
                rotate: [0, -15, 15, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.form>
      </div>
    </BlurEffect>
  );
};

export default ContactPage;