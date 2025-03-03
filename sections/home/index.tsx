"use client"

// import Frame from "@/components/frame";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "@/components/cards";
import ScrollBlurBackground from "@/components/scroll-blur-background";

export default function Home() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.36]);
  const y = useTransform(scrollYProgress, [0, 1], ["50", "0vh"]);

  return (
    // <div id="home" className="backdrop-blur-lg">
    <div id="home" className="">
      <ScrollBlurBackground />
      <div className="h-screen w-screen" ref={containerRef} />
      <motion.img
        src="/logo.svg"
        className="fixed mx-auto top-0 left-0 right-0"
        alt=""
        style={{ scale, y }}
      />
      <div className="flex flex-col items-center gap-[20px] mt-[300px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="z-0 mx-auto" key={index} >
            <Cards />
          </div>
        ))}
      </div>
    </div>
  )
}