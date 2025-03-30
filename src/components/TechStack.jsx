import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Rocket, Layers, Cloud, GitBranch, Zap } from "lucide-react"; // Icons

const cardData1 = [
  { text: "React.js", icon: <Code className="w-6 h-6 ml-2 text-blue-400" /> },
  { text: "Node.js", icon: <Server className="w-6 h-6 ml-2 text-green-500" /> },
  { text: "TailwindCSS", icon: <Rocket className="w-6 h-6 ml-2 text-cyan-400" /> },
  { text: "JavaScript", icon: <Database className="w-6 h-6 ml-2 text-yellow-400" /> },
];

const cardData2 = [
  { text: "MongoDB", icon: <Database className="w-6 h-6 ml-2 text-green-400" /> },
  { text: "Next.js", icon: <Layers className="w-6 h-6 ml-2 text-white" /> },
  { text: "Express.js", icon: <Server className="w-6 h-6 ml-2 text-gray-400" /> },
  { text: "TypeScript", icon: <Code className="w-6 h-6 ml-2 text-blue-500" /> },
];

const cardData3 = [
  { text: "Framer Motion", icon: <Zap className="w-6 h-6 ml-2 text-pink-400" /> },
  { text: "Redux", icon: <GitBranch className="w-6 h-6 ml-2 text-purple-400" /> },
  { text: "GraphQL", icon: <Cloud className="w-6 h-6 ml-2 text-red-400" /> },
  { text: "Firebase", icon: <Rocket className="w-6 h-6 ml-2 text-orange-400" /> },
];

const InfiniteMarquee = ({ cards, speed, direction }) => {
  const [width, setWidth] = useState(0);
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [-width, 0] : [0, -width],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative flex overflow-hidden w-full">
      <motion.div
        ref={marqueeRef}
        className="flex space-x-4"
        variants={marqueeVariants}
        animate="animate"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="w-[160px] h-[60px] bg-gray-800 text-white flex items-center justify-center rounded-3xl shadow-lg flex-shrink-0 px-4"
          >
            {card.text} {card.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="relative w-full flex flex-col items-center space-y-2 bg-black py-4">
      {/* Vignette Edge Effects */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

      <InfiniteMarquee cards={cardData1} speed={13} direction="right" />
      <InfiniteMarquee cards={cardData2} speed={15} direction="left" />
      <InfiniteMarquee cards={cardData3} speed={10} direction="right" />
    </div>
  );
};

export default TechStack;
