import CardWrapper from "@/components/card-wrapper";
import { IBlock } from "@/types/IBlock";

export default function CardDefault(props: IBlock) {
  return (
    <CardWrapper {...props}>
      {"Неизвестный блок"}
    </CardWrapper>
  );
}