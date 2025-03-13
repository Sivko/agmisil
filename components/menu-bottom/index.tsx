import Image from "next/image";

export default function MenuBottom() {
  return (<div className="fixed bottom-12 left-0 right-0">
    <div className="p-1 mx-auto w-fit bg-[#28282899] rounded-full flex backdrop-blur-[5px]">
      <button className="bg-white rounded-full px-5 h-[40px] flex items-center justify-center">
        <Image src={"/subtract-sm.svg"} width={24} height={21} alt={""} />
      </button>
      <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
        Контакты
      </button>
      <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
        Купить
      </button>
    </div>
  </div>)
}