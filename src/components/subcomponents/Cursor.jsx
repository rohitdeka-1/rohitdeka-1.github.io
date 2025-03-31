import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorColor, setCursorColor] = useState("white");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isTouchDevice = () => "ontouchstart" in window || window.innerWidth < 768;

    if (isTouchDevice()) {
      setIsVisible(false);
      return;
    }

    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setCursorVariant("link");
        setCursorColor("#ffcc00");
      } else if (["P", "SPAN", "H1", "H2", "H3"].includes(e.target.tagName)) {
        setCursorVariant("text");
        setCursorColor("#00ffcc");
      } else {
        setCursorVariant("default");
        setCursorColor("white");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseover", handleHover);
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: cursorColor,
      mixBlendMode: "difference",
      opacity: isVisible ? 1 : 0,
    },
    text: {
      width: 2,
      height: 40,
      borderRadius: "0%",
      backgroundColor: cursorColor,
      opacity: isVisible ? 1 : 0,
    },
    link: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: cursorColor,
      scale: 1.5,
      opacity: isVisible ? 1 : 0,
    },
  };

  return isVisible ? (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: cursorPos.x - 5,
          y: cursorPos.y - 5,
          ...cursorVariants[cursorVariant],
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.05,
        }}
      />
      <style>{`body { cursor: none; }`}</style>
    </>
  ) : null;
};

export default Cursor;
