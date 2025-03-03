"use client"

// import Frame from "@/components/frame";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "@/components/cards";

export default function Home() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.36]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["50vh", "0vh"]);

  return (
    <div id="home" className="backdrop-blur-lg">
      <div className="h-screen w-screen" ref={containerRef} />
      <motion.img
        src="/logo.svg"
        alt=""
        className="fixed rounded-xl left-0 right-0 top-0 mx-auto"
        style={{ scale, y }}
      />
      <div className="flex flex-col items-center gap-[20px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="z-0 mx-auto" key={index} >
            <Cards />
          </div>
        ))}
      </div>
    </div>
  )
}