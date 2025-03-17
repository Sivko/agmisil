import { IBlock } from "@/types/IBlock";
import CardTopText from "../card-top-text";

export default function CardCollection(props: IBlock) {
  if (!props.cards?.length) return <></>;

  return props.cards.map((card, index) => (
    <CardTopText {...card} key={index} />
  ))
}