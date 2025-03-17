import ModalMediumItem from "@/components/modals/modal-medium-item";
import { getIconToImageHelper } from "@/helpers/get-image-helper";
import { addModal } from "@/store";
import { Button } from "@/types/IPage";
import Image from "next/image";

export default function IconTextButton(props: Button) {

  const icon = getIconToImageHelper(props?.icon)
  return (<button>
    <button
      onClick={() => addModal(<ModalMediumItem><div className="bg-white p-4">VIDEO</div></ModalMediumItem>)}
      className="bg-[#00000080] flex items-center p-2 pr-6 gap-4 rounded-full"
    >
      {icon && <Image {...icon} />}
      <h2 className="italic text-lg leading-5">{props.text}</h2>
    </button>
  </button>)
}