"use client";

import { useRef } from "react";
import CardTopText from "./card-top-text";
import { motion, useScroll, useTransform } from "framer-motion";
import CardViewVideo from "./card-view-video";
import CardDefault from "./card-default";
import CardContacts from "./card-contacts";
import { IBlock } from "@/types/IBlock";
import { useStore } from "@tanstack/react-store";
import { store } from "@/store";

const blocks = {
  "card-top-text": CardTopText,
  "card-contacts": CardContacts,
  "card-view-video": CardViewVideo,
  "card-default": CardDefault
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

  return <>
    <motion.div ref={ref} style={{ opacity, scale, translateY }}>
      <SelectedBlock {...props} />
    </motion.div>
  </>
}

const SelectedBlock = (props: { blockName: string }) => {
  const Block = blocks[props?.blockName as keyof typeof blocks] ?? CardDefault;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return <Block {...props} />
}