"use client"

// import Frame from "@/components/frame";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "@/components/cards";
import ScrollBlurBackground from "@/components/scroll-blur-background";
import MenuBottom from "@/components/menu-bottom";
// import AutoScroll from "@/lib/autoscroll";

export default function Home() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.36, 0.36]);
  const y = useTransform(scrollYProgress, [0, 0.6, 1], ["50", "0vh", "0vh"]);

  return (
    <div id="home" className="">
      <ScrollBlurBackground />
      {/* <AutoScroll /> */}

      <div className="h-screen w-screen" ref={containerRef} />
      <motion.img
        src="/logo.svg"
        className="fixed mx-auto top-0 left-0 right-0"
        alt=""
        style={{ scale, y }}
      />
      <div className="flex flex-col items-center gap-[20px] mt-[300px]">
        {["card-view-video", "card-top-text", "def", "card-contacts"].map((name, index) => (
          <div className="z-0 mx-auto autoscroll" key={index} >
            <Cards blockName={name} />
          </div>
        ))}
      </div>
      <MenuBottom />

    </div>
  )
}