import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorColor, setCursorColor] = useState("white");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't track cursor on mobile

    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleHover = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setCursorVariant("link");
        setCursorColor("#ffcc00"); // Yellow for links/buttons
      } else if (["P", "SPAN", "H1", "H2", "H3"].includes(e.target.tagName)) {
        setCursorVariant("text");
        setCursorColor("#00ffcc"); // Cyan for text
      } else {
        setCursorVariant("default");
        setCursorColor("white"); // Default white
      }
    };

    document.body.addEventListener("mouseover", handleHover);
    return () => document.body.removeEventListener("mouseover", handleHover);
  }, [isMobile]);

  if (isMobile) return null; // Hide cursor on mobile

  const cursorVariants = {
    default: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: cursorColor,
      mixBlendMode: "difference",
    },
    text: {
      width: 2,
      height: 40,
      borderRadius: "0%",
      backgroundColor: cursorColor,
    },
    link: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: cursorColor,
      scale: 1.5,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: cursorPos.x - 10,
        y: cursorPos.y - 10,
        ...cursorVariants[cursorVariant],
      }}
      transition={{
        type: "spring",
        stiffness: 800, // Faster
        damping: 25,
        duration: 0.03, // Almost instant
      }}
    />
  );
};

export default Cursor;
