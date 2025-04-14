"use client"

import { useState, useEffect, useRef } from "react"
import ShowCard from "./subcomponents/ShowCard"
import { motion } from "motion/react"

const TopHeading = ({ target }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  const [Voice, setVoice] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio("/Assets/rohitdeka.mp3")

    const handleAudioEnded = () => {
      setVoice(false)
    }

    audioRef.current.addEventListener("ended", handleAudioEnded)

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleAudioEnded)
        audioRef.current.pause()
      }
    }
  }, [])

  const handleVoice = () => {
    setVoice((prevVoice) => !prevVoice)
  }

  useEffect(() => {
    if (Voice) {
      // If audio has ended, reset currentTime to ensure it plays from the beginning
      if (audioRef.current.ended) {
        audioRef.current.currentTime = 0
      }
      audioRef.current.play()
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [Voice])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="home"
      className=" mt-8 w-full flex flex-row justify-between items-center lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto   "
    >
      <div className="max-w-xs md:max-w-md lg:max-w-lg">
        <h1 className="mt-5 font-geist  font-bold text-3xl 2xl:text-4xl text-white">Hi, I'm Rohit ⚡</h1>
        <div className="flex mt-5 items-center gap-2 flex-row ">
          <p className=" text-gray-300">Developer</p>
          <button onClick={handleVoice}>🔊</button>
        </div>

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
                  <a href="https://linkedin.com/in/rohitdekarhd" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
            }
          />
        </div>
      </div>

      <motion.div
        className="flex justify-end items-center w-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          className=" w-28 sm:w-28 md:w-28 lg:w-32 xl:w-38 2xl:w-29 rounded-3xl"
          src="/Assets/omen-img.jpg"
          alt="Omen GIF"
        />
      </motion.div>
    </div>
  )
}

export default TopHeading

