"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Book,
  Facebook,
  Instagram,
  LetterText,
  Library,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import TypedText from "./components/typewriter";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-screen">
      <div
        className="w-full min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7969735/pexels-photo-7969735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-around w-full min-h-screen bg-black bg-opacity-50">
          <motion.div
            className="flex flex-col justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TypedText
              text={"LegitInk."}
              className="md:text-7xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-zinc-300"
            />
            <TypedText
              text={"Launching Soon!"}
              className="text-5xl mt-3 font-semibold text-white text-center"
              delay={1000}
            />
          </motion.div>

          {/* Conditionally render the arrow button after 4 seconds */}
          {isVisible && (
            <button
              onClick={scrollDown}
              className="absolute bottom-10 w-12 h-12 rounded-full flex items-center justify-center bg-white bg-opacity-70 animate-pulse"
              title="Scroll to top"
            >
              <ArrowDown className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tr from-zinc-900 to-black text-zinc-400">
        <motion.h3
          className="text-2xl mt-6 font-semibold text-zinc-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About
        </motion.h3>
        <motion.p
          className="text-lg text-center mt-2 p-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          LegalInk is a platform for lawyers to manage their clients and cases.
        </motion.p>

        {/* Animated Feature Cards in About Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-10 p-10">
          {[1, 2, 3].map((cardId) => (
            <motion.div
              key={cardId}
              className="w-full p-6 rounded-lg shadow-xl cursor-pointer border-[1px] border-zinc-800 hover:scale-125 duration-300 ease-in-out"
              initial="hidden"
              whileInView="visible"
              variants={scaleUp}
            >
              <div className="flex items-center justify-center">
                {cardId === 1 ? (
                  <Book className="w-10 h-10 mb-2 bg-gradient-to-br from-gray-800 to-zinc-900 p-2 rounded-full" />
                ) : cardId === 2 ? (
                  <Library className="w-10 h-10 mb-2 bg-gradient-to-br from-gray-800 to-zinc-900 p-2 rounded-full" />
                ) : (
                  <LetterText className="w-10 h-10 mb-2 bg-gradient-to-br from-gray-800 to-zinc-900 p-2 rounded-full" />
                )}
              </div>
              <h4 className="text-xl font-semibold">
                {cardId === 1
                  ? "Law Dictionary"
                  : cardId === 2
                    ? "Library"
                    : "Write/Read Articles"}
              </h4>
              <p className="mt-2">
                {cardId === 1
                  ? "Get all law-related terms, words, and abbreviations in our Law Dictionary. Everything you need to understand legal jargon!"
                  : cardId === 2
                    ? "Upload and get notes, acts, and all law-related documents. You name it, you get it!"
                    : "Write and read articles with full credibility. Share your knowledge and engage with the legal community."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="flex md:items-center items-start md:flex-row gap-4 flex-col justify-evenly w-full min-h-[100px] p-5 bg-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <div className="flex flex-col items-start">
          <span className="text-3xl text-black font-bold">Contact Us</span>
          <span className="text-lg text-zinc-800 font-semibold">
            thelegalink@gmail.com
          </span>
        </div>
        <motion.div
          className="flex flex-col items-start"
          variants={fadeInRight}
        >
          <span className="text-3xl text-black font-bold">Follow us:</span>
          <div className="flex items-center justify-between w-full">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
