import { useRef } from "react";
import CardTopText from "./card-top-text";
import { motion, useScroll, useTransform } from "framer-motion";
import CardViewVideo from "./card-view-video";
import CardDefault from "./card-default";
import CardContacts from "./card-contacts";
import { IBlock } from "@/types/IBlock";

const blocks = {
  "card-top-text": CardTopText,
  "card-contacts": CardContacts,
  "card-view-video": CardViewVideo,
  "card-default": CardDefault
}

export default function Cards(props: IBlock) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start 450px", "start 0px"],
    offset: ["start 180px", "start -200px"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.9, 0.4]);
  // const translateY = useTransform(scrollYProgress, [0, 0.3, 1], [-300, 1, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 300]);

  const SelectedBlock = (props: { blockName: string }) => {
    const Block = blocks[props?.blockName as keyof typeof blocks] ?? CardDefault;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return <Block {...props} />
  }

  return <>
    <motion.div
      ref={ref}
      className="h-full"
      style={{ opacity, scale, translateY }}
    >
      <SelectedBlock {...props} />
    </motion.div>
  </>
}