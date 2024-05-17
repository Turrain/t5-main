// store.ts
import create from "zustand";

interface NightsState {
  hoverIndex: number | null;
  startIndex: number | null;
  endIndex: number | null;
  setHoverIndex: (index: number | null) => void;
  setStartIndex: (index: number | null) => void;
  setEndIndex: (index: number | null) => void;
  handleClickIndex: (index: number) => void;
  handleMouseEnter: (index: number) => void;
}

export const useNightsStore = create<NightsState>((set, get) => ({
  hoverIndex: null,
  startIndex: null,
  endIndex: null,
  setHoverIndex: (index) => set({ hoverIndex: index }),
  setStartIndex: (index) => set({ startIndex: index }),
  setEndIndex: (index) => set({ endIndex: index }),
  handleClickIndex: (index) => {
    const { startIndex, endIndex, setStartIndex, setEndIndex } = get();
    if (startIndex === null || (startIndex !== null && endIndex !== null)) {
      setStartIndex(index);
      setEndIndex(null);
    } else if (startIndex !== null && endIndex === null) {
      if (index < startIndex) {
        setEndIndex(startIndex);
        setStartIndex(index);
      } else {
        setEndIndex(index);
      }
    }
  },
  handleMouseEnter: (index) => set({ hoverIndex: index }),
}));