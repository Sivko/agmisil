import CardWrapper from "@/components/card-wrapper"
import { getFirstMediaHelper } from "@/helpers/get-image-helper";
import { IBlock } from "@/types/IBlock";
import Image from "next/image";
import Link from "next/link";

export default function CardContacts(props: IBlock) {

  return (
    <CardWrapper media={getFirstMediaHelper(props?.media)}>
      <div id="contancts" className="flex flex-col items-center">
        <div className="mb-6">
          <h2>Контакты</h2>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="text-center">
            <p>Адрес производства:</p>
            <p>ООО «М9 Фарм», 445043, Самарская обл., г. Тольятти, Южное ш., влд. 14, стр. 3</p>
            <br />
            <p>Телефон:</p>
            <p>+7 (XXX) XXX-XX-XX</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href={"#"}><Image width={24} height={24} src={"/icons/inst.svg"} alt="" /></Link>
            <Link href={"#"}><Image width={24} height={24} src={"/icons/tg.svg"} alt="" /></Link>
            <Link href={"#"}><Image width={24} height={24} src={"/icons/vk.svg"} alt="" /></Link>
          </div>
          <Image src="/icons/hr.svg" width={91} height={21} alt="" />
        </div>
        <div className="mt-3 flex ">
          <div className="flex flex-col text-center">
            <p className="opacity-60 ">© 2025 Agmio. Все права защищены.</p>
            <Link className="opacity-60 underline hover:opacity-100 transition-all" href={"#"}>Политика конфиденциальности</Link>
            <Link className="opacity-60 underline hover:opacity-100 transition-all" href={"#"}>Условия использования</Link>
          </div>
        </div>
      </div>
    </CardWrapper  >
  );
}