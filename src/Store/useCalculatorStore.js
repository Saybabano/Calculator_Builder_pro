import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  components: [],
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (index) =>
    set((state) => ({
      components: state.components.filter((_, i) => i !== index),
    })),
}));

export default useCalculatorStore;
