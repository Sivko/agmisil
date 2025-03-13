import { Store } from "@tanstack/react-store";

interface IStore {
  modals: React.ReactNode[],
  isPlayVideo: boolean
}
export const store = new Store<IStore>({
  modals: [],
  isPlayVideo: true
})

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
