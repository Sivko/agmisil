import CardWrapper from "@/components/card-wrapper";
import { IBlock } from "@/types/IBlock";

export default function CardTopText(props: IBlock) {
  return (
    <CardWrapper {...props}>
      <div className="p-6">
        <div className="max-w-[280px]">
          <h2 className="mb-4">Бизнес с человеческим лицом</h2>
          <p>
            Agmio — это косметика, созданная с вниманием к деталям.
          </p>
          <p>Наши формулы разработаны для заботы о коже, а производство основано на высоких стандартах качества.</p>
        </div>
      </div>
    </CardWrapper>)
}