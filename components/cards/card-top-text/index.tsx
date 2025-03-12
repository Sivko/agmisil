import CardWrapper from "@/components/card-wrapper";
import { IBlock } from "@/types/IBlock";

export default function CardTopText(props: IBlock) {
  return (
    <CardWrapper {...props}>
      <h1><i>Бизнес с человеческим лицом</i></h1>
      <p>
        Agmio — это косметика, созданная с вниманием к деталям.
        Наши формулы разработаны для заботы о коже, а производство основано на высоких стандартах качества.
      </p>
    </CardWrapper>)
}