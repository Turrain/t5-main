import create from "zustand";
import dayjs, { Dayjs } from "dayjs";
interface DateStoreState {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

interface DateStoreActions {
  setStartDate: (startDate: Dayjs | null) => void;
  setEndDate: (endDate: Dayjs | null) => void;
  resetDates: () => void;
  handleDateClick: (day: Dayjs | string) => void;
}

export const useDateStore = create<DateStoreState & DateStoreActions>(
  (set,get) => ({
    startDate: null,
    endDate: null,
    setStartDate: (startDate) => {set({ startDate })},
    setEndDate: (endDate) => {  console.log(endDate); set({ endDate })},
    resetDates: () => set({ startDate: null, endDate: null }),
    handleDateClick: (day) =>
      set((state) => {
      
        // Return type always conforms to Partial<DateStoreState>
        if (!state.startDate || (state.startDate && state.endDate)) {
          set( { startDate: dayjs(day), endDate: null }); // Always resetting endDate
        } else if (state.startDate && !state.endDate) {
          if (dayjs(day).isAfter(state.startDate)) {
            
            set( { endDate: dayjs(day) }); // Only updating endDate
          } else {
            set ({ startDate: dayjs(day), endDate: null }); // Resetting endDate, updating startDate
          }
        }
        console.log(get().startDate,get().endDate)
        return {}; // Always return at least an empty object to satisfy TypeScript
      }),
  })
);
