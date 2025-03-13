import CardWrapper from "@/components/card-wrapper"
import ModalMediumItem from "@/components/modals/modal-medium-item";
import { addModal } from "@/store";
import { IBlock } from "@/types/IBlock";
import Image from "next/image";

export default function CardViewVideo(props: IBlock) {
  return (
    <CardWrapper {...props}>
      <div className="flex flex-col items-center h-full justify-center">
        <div className="mb-4">
          <Image src="/logo_mark.svg" width={96} height={96} alt="" />
        </div>
        <div className="text-center mb-8">
          <p>Agmio — это косметика, созданная с вниманием к деталям.</p>
          <p>Наши формулы разработаны для заботы о коже, а производство основано на высоких стандартах качества.</p>
        </div>
        <div>
          <button onClick={()=>addModal(<ModalMediumItem>
            <div className="bg-white p-4">VIDEO</div>
          </ModalMediumItem>)} className="bg-[#00000080] flex items-center p-2 pr-6 gap-4 rounded-full">
            <Image alt="" src={"/play.svg"} width={32} height={32} />
            <h2 className="italic text-lg leading-5">Видео с производства</h2>
          </button>
        </div>
      </div>
    </CardWrapper >
  );
}