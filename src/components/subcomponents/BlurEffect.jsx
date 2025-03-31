import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BlurEffect = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      exit={{ filter: "blur(10px)", opacity: 0, transition: { duration: 0.5 } }}
      className="w-full h-screen"
    >
      {children}
    </motion.div>
  );
};

export default BlurEffect;
