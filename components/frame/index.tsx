"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "../cards";

export default function Frame() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-full"
      style={{ opacity, scale, translateY }}
    >
      <Cards />
    </motion.div>
  );
}
