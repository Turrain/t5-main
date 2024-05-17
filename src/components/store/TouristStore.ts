// store.ts
import create from "zustand";

interface Child {
  id: number;
  age: number;
}

interface TouristState {
  adultCount: number;
  children: Child[];
  selectedChildId: number | null;
  setAdultCount: (count: number) => void;
  addChild: (age: number) => void;
  removeChild: (id: number) => void;
  selectChild: (id: number | null) => void;
  setChildAge: (id: number, age: number) => void;
}

export const useTouristStore = create<TouristState>((set) => ({
  adultCount: 2,
  children: [],
  selectedChildId: null,
  setAdultCount: (count) =>
    set((state) => ({ adultCount: Math.max(0, state.adultCount + count) })),
  addChild: (age) =>
    set((state) => {
      const newChild = { id: Date.now(), age };
      return {
        children: [...state.children, newChild],
        selectedChildId: newChild.id,
      };
    }),
  removeChild: (id) =>
    set((state) => ({
      children: state.children.filter((child) => child.id !== id),
      selectedChildId: state.selectedChildId === id ? null : state.selectedChildId,
    })),
  selectChild: (id) =>
    set((state) => ({
      selectedChildId: state.selectedChildId === id ? null : id,
    })),
  setChildAge: (id, age) =>
    set((state) => ({
      children: state.children.map((child) =>
        child.id === id ? { ...child, age } : child
      ),
      selectedChildId: null,
    })),
}));