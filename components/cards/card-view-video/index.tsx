import ButtonComponent from "@/components/button";
import CardWrapper from "@/components/card-wrapper"
import RichText from "@/components/rich-text";
import { getFirstMediaToImageHelper } from "@/helpers/get-image-helper";
import { IBlock } from "@/types/IBlock";
import Image from "next/image";

export default function CardViewVideo(props: IBlock) {

  const media = getFirstMediaToImageHelper(props?.media)

  return (
    <CardWrapper>
      {/* {JSON.stringify(props)} */}
      <div className="flex flex-col items-center h-full justify-center">
        {media && <div className="mb-4">
          <Image {...media} />
        </div>}
        <div className="text-center mb-8">
          <RichText text={props.description ?? ""} />
        </div>
        <div className="flex gap-2">
          {props?.buttons && props.buttons.map((item, index) => (
            <ButtonComponent key={index} {...item} />
          ))}
        </div>
      </div>
    </CardWrapper >
  );
}