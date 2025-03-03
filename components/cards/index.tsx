import { useRef } from "react";
import CardTopText from "./card-top-text";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Cards() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 450px", "start 0px"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 1, 1]);

  return <>
    <motion.div
      ref={ref}
      className="h-full"
      style={{ opacity, scale, translateY }}
    >
      <div className="bg-green-400 rounded h-[553px] max-w-[400px]">
        <CardTopText />
      </div>
    </motion.div>
  </>
}