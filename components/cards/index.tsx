"use client";

import { useRef } from "react";
import CardTopText from "./card-top-text";
import { motion, useScroll, useTransform } from "framer-motion";
import CardViewVideo from "./card-view-video";
import CardDefault from "./card-default";
// import CardContacts from "./card-contacts";
import { IBlock } from "@/types/IBlock";
import { useStore } from "@tanstack/react-store";
import { store } from "@/store";
import CardCollection from "./card-collection";

const blocks = {
  "sections.basic": CardViewVideo,
  "sections.cards": CardCollection,
}

export default function Cards(props: IBlock) {
  const { containerRef } = useStore(store, (state) => state);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 180px", "start -200px"],
    container: containerRef
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.9, 0.4]);
  const translateY = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 300]);

  if (props?.blockName == "sections.cards" && props?.cards) return props.cards.map((item, index) => (
    <div className="snap-center" key={`sc${index}`} >
      <CardTopText {...item} />
    </div>
  ))

  return (
    <div className="snap-center" >
      <motion.div ref={ref} style={{ opacity, scale, translateY }}>
        <SelectedBlock {...props} />
      </motion.div>
    </div>
  )
}

const SelectedBlock = (props: IBlock) => {
  const Block = blocks[props?.blockName as keyof typeof blocks] ?? CardDefault;
  return <Block {...props} />
}