"use client"

import { store } from "@/store";
import { useStore } from "@tanstack/react-store";

export default function MenuBottom() {

  const { global } = useStore(store, (state) => state);


  return (<div className="fixed bottom-12 left-0 right-0">
    {/* {JSON.stringify(global)} */}

    <div className="p-1 mx-auto w-fit bg-[#28282899] rounded-full flex backdrop-blur-[5px]">
      {/* <button className="bg-white rounded-full px-5 h-[40px] flex items-center justify-center">
        <Image src={"/subtract-sm.svg"} width={24} height={21} alt={""} />
      </button>
      <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
        Контакты
      </button>
      <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
        Купить
      </button> */}
      {global?.data?.navbar?.item1 && (
        <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
          {global.data.navbar.item1.text}
        </button>
      )}
      {global?.data?.navbar?.item2 && (
        <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
          {global.data.navbar.item2.text}
        </button>
      )}
      {global?.data?.navbar?.item3 && (
        <button className="text-white rounded-full px-5 h-[40px] flex items-center justify-center">
          {global.data.navbar.item3.text}
        </button>
      )}
    </div>
  </div>)
}