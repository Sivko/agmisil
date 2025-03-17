import CardWrapper from "@/components/card-wrapper";
import RichText from "@/components/rich-text";
import { getFirstMediaHelper } from "@/helpers/get-image-helper";
import { Card } from "@/types/IPage";

export default function CardTopText(props: Card) {
  return (
    <CardWrapper media={getFirstMediaHelper(props?.media)}>
      <div className="p-6 h-full">
        <div className="max-w-[280px]">
          <h2 className="mb-4">{props.header}</h2>
          <RichText text={props.description} />
        </div>
      </div>
    </CardWrapper>)
}