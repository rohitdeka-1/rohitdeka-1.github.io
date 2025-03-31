
import { useRef, useEffect, useState, memo, useDeferredValue } from "react"
import { motion, useAnimation } from "framer-motion"
import { Code, Braces, Server, Database, Rocket, Layers, Cloud, GitBranch, Zap } from "lucide-react"

const cardData1 = [
  { text: "React.js", icon: <Code className="w-6 h-6 ml-2 text-blue-400" /> },
  { text: "Node.js", icon: <Server className="w-6 h-6 ml-2 text-green-500" /> },
  { text: "TailwindCSS", icon: <Rocket className="w-6 h-6 ml-2 text-cyan-400" /> },
  { text: "JavaScript", icon: <Braces className="w-6 h-6 text-yellow-400" /> },
]

const cardData2 = [
  { text: "MongoDB", icon: <Database className="w-6 h-6 ml-2 text-green-400" /> },
  { text: "Next.js", icon: <Layers className="w-6 h-6 ml-2 text-white" /> },
  { text: "Express.js", icon: <Server className="w-6 h-6 ml-2 text-gray-400" /> },
  { text: "TypeScript", icon: <Code className="w-6 h-6 ml-2 text-blue-500" /> },
]

const cardData3 = [
  { text: "Framer Motion", icon: <Zap className="w-6 h-6 ml-2 text-pink-400" /> },
  { text: "Redux", icon: <GitBranch className="w-6 h-6 ml-2 text-purple-400" /> },
  { text: "GraphQL", icon: <Cloud className="w-6 h-6 ml-2 text-red-400" /> },
  { text: "Firebase", icon: <Rocket className="w-6 h-6 ml-2 text-orange-400" /> },
]


const Card = memo(({ text, icon, index }) => (
  <div
    key={index}
    className="w-[160px] h-[60px] bg-gray-800 text-white flex items-center justify-center rounded-3xl shadow-lg flex-shrink-0 px-4"
    style={{
      willChange: "transform",
      backfaceVisibility: "hidden",
    }}
  >
    {text} {icon}
  </div>
))

Card.displayName = "Card"


const InfiniteMarquee = memo(({ cards, speed, direction }) => {
  const marqueeRef = useRef(null)
  const [width, setWidth] = useState(0)
  const controls = useAnimation()


  useEffect(() => {
    if (!marqueeRef.current) return

    const calculateWidth = () => {
      if (marqueeRef.current) {
        const newWidth = marqueeRef.current.scrollWidth / 2
        setWidth(newWidth)
      }
    }

    calculateWidth()

    const resizeObserver = new ResizeObserver(calculateWidth)
    resizeObserver.observe(marqueeRef.current)

    return () => {
      if (marqueeRef.current) {
        resizeObserver.unobserve(marqueeRef.current)
      }
    }
  }, [cards])


  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: direction === "left" ? [-width, 0] : [0, -width],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      })
    }
  }, [width, direction, speed, controls])

  const duplicatedCards = [...cards, ...cards]

  return (
    <div className="relative flex overflow-hidden w-full">
      <motion.div
        ref={marqueeRef}
        className="flex space-x-4"
        animate={controls}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
          transform: "translateZ(0)", 
        }}
      >
        {duplicatedCards.map((card, index) => (
          <Card key={`${card.text}-${index}`} text={card.text} icon={card.icon} index={index} />
        ))}
      </motion.div>
    </div>
  )
})

InfiniteMarquee.displayName = "InfiniteMarquee"

const TechStack = () => {

  const deferredCardData1 = useDeferredValue(cardData1)
  const deferredCardData2 = useDeferredValue(cardData2)
  const deferredCardData3 = useDeferredValue(cardData3)

  return (
    <div className="relative w-full flex flex-col items-center space-y-2 bg-black py-4">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

      <InfiniteMarquee cards={deferredCardData1} speed={14} direction="right" />
      <InfiniteMarquee cards={deferredCardData2} speed={15} direction="left" />
      <InfiniteMarquee cards={deferredCardData3} speed={10} direction="right" />
    </div>
  )
}

export default TechStack

