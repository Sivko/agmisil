"use client"

// import Frame from "@/components/frame";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "@/components/cards";
import ScrollBlurBackground from "@/components/scroll-blur-background";
import MenuBottom from "@/components/menu-bottom";
import VideoBackground from "@/components/video-background";
// import AutoScroll from "@/lib/autoscroll";

export default function Home() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.36, 0.36]);
  const y = useTransform(scrollYProgress, [0, 0.6, 1], ["40", "0vh", "0vh"]);


  return (
    <div id="home" className="">
      <VideoBackground videoSrc="https://cms.agmio.ru/uploads/agmio_bg_426f924234.webm" placeholderSrc="/background.png" />

      <ScrollBlurBackground />
      {/* <AutoScroll /> */}

      <div className="h-screen w-screen" ref={containerRef} />
      <motion.img
        src="/logo.svg"
        className="fixed mx-auto top-0 left-0 right-0 z-10"
        alt=""
        style={{ scale, y }}
      />
      <div className="flex flex-col items-center gap-[20px] mt-[300px]">
        {["card-view-video", "card-top-text","card-top-text","card-top-text", "card-contacts"].map((name, index) => (
          <div className="z-0 mx-auto autoscroll" key={index} >
            <Cards blockName={name} />
          </div>
        ))}
      </div>
      <MenuBottom />

    </div>
  )
}