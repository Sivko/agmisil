import { Store } from "@tanstack/react-store";
import { IRootGlobal } from "./types/IGlobal";

interface IStore {
  modals: React.ReactNode[],
  isPlayVideo: boolean,
  containerRef: React.RefObject<HTMLDivElement | null>,
  global?: IRootGlobal
}
export const store = new Store<IStore>({
  modals: [],
  isPlayVideo: true,
  containerRef: { current: null },
})


export const setContainerRef = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  store.setState((prev) => ({ ...prev, containerRef }));
}

export const setGlobal = (global: IRootGlobal) => {
  store.setState((prev) => ({ ...prev, global }));
}

export const addModal = (modal: React.ReactNode) => {
  store.setState((state) => ({
    ...state,
    modals: [...state.modals, modal],
  }));
};

export const removeLastModal = () => {
  store.setState((state) => ({
    ...state,
    modals: state.modals.slice(0, state.modals.length - 1),
  }));
};

