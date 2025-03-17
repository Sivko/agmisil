"use client";

import { store } from "@/store";
import { useStore } from "@tanstack/react-store";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useEffect, useRef, useState, } from "react";


const VideoBackground: React.FC = () => {

  const { global } = useStore(store, (state) => state);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsVideoLoaded] = useState(false);
  const { isPlayVideo, containerRef } = useStore(store, (state) => state);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  // Блюр дает большую просадку - пока без него
  // const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);
  // const filter = useTransform([brightness, blur], ([b, bl]: MotionValue<number | string>[]) => `brightness(${b}) blur(${bl}px)`);
  const filter = useTransform([brightness], ([b]: MotionValue<number | string>[]) => `brightness(${b})`);


  useEffect(() => {
    if (videoRef.current) {
      if (isPlayVideo) {
        videoRef.current.play().catch((error) => console.error("Video play error:", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlayVideo]);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden z-[-1]"
      style={{ filter }}
    >
      {global?.data.videoBg && <video
        ref={videoRef}
        className={`w-full h-full object-cover ${true ? "block" : "hidden"}`}
        src={global.data.videoBg}
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      }
      {/* Реализовать для мобильной версии, чтобы там была статичная картинка, и останавливать видео при сложных анимациях */}
      {/* {!isVideoLoaded && (
        <Image src={placeholderSrc} alt="Video Placeholder" className="w-full h-full object-cover" width={1200} height={1200} />
      )} */}
    </motion.div>
  );
};

export default VideoBackground;
