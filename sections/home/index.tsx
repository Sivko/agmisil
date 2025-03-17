"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Cards from "@/components/cards";
import MenuBottom from "@/components/menu-bottom";
import VideoBackground from "@/components/video-background";
import { setContainerRef, setGlobal } from "@/store";
import { IRootPage } from "@/types/IPage";
import { IRootGlobal } from "@/types/IGlobal";

export default function Home({ page, global }: { page: IRootPage["data"][0], global: IRootGlobal }) {

  setGlobal(global);

  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.36, 0.36]);
  const y = useTransform(scrollYProgress, [0, 0.6, 1], ["40", "0vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], ["1", "1", "0.5"]);

  useEffect(() => {
    setContainerRef(containerRef);
  }, [])


  return (
    <div id="home" ref={containerRef}>
      <VideoBackground />
      <div ref={sectionRef} className="h-screen w-screen shrink-0 snap-normal snap-start" />
      <motion.img
        src="/logo.svg"
        className="fixed mx-auto top-0 left-0 right-0 z-10 pointer-events-none"
        alt=""
        style={{ scale, y, opacity }}
      />
      {page.sections.map((section, index) => (
        <Cards blockName={section.__component} {...section} key={index} />
      ))}
      <MenuBottom />
    </div>
  )
}