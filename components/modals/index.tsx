'use client';

import { useStore } from '@tanstack/react-store';
import { removeLastModal, store } from '@/store';
import { MouseEvent, useEffect } from 'react';
// import { IoClose } from 'react-icons/io5';

export default function Modals() {
  const { modals } = useStore(store, (state) => state);

  useEffect(() => {
    function keyCloseModal(e: KeyboardEvent) {
      if (e.key === 'Escape') removeLastModal();
    }
    document.addEventListener('keyup', keyCloseModal);
    return () => document.removeEventListener('keyup', keyCloseModal);
  }, []);

  if (!modals.length) return <></>;

  function handlerClickToClose(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const element = e.target as HTMLDivElement;
    if (element.getAttribute('data-close') === 'true') removeLastModal();
  }

  return (
    <>
      {modals.map((content, index) => (
        <div
          key={index}
          onClick={(e) => handlerClickToClose(e)}
          className="bg-[#0000004a] fixed inset-0 z-50 overscroll-contain overflow-y-auto"
        >
          <div
            data-close="true"
            className="h-[101dvh] flex items-center max-md:items-end justify-center"
          >
            {content}
          </div>
          <div data-close="true" className=" absolute top-2 right-2 max-md:hidden">
            {/* <IoClose className="pointer-events-none text-secondary" size={40} /> */}
            <span className="text-3xl">x</span>
          </div>
        </div>
      ))}
    </>
  );
}
