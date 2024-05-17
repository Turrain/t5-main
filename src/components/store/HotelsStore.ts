import { create } from "zustand";
import fetchHotelsData from "../api/fetchHotels";

interface HotelStore {
  hotel: Hotel[]; //selected
  hotels: Hotel[]; //all
  _prevState: {
    countryId?: number;
    towns?: number[];
    stars?: number[];
  };
  setHotel: (hotel: Hotel[]) => void;
  getHotels: (
    countryId: number,
    townsIds: number[],
    starsIds: number[]
  ) => void;
}

export const useHotelStore = create<HotelStore>((set, get) => ({
  hotel: [],
  hotels: [],
  _prevState: {},
  setHotel: (hotel) => {
    console.log(hotel);
    set({ hotel });
  },
  getHotels: async (countryId, townsIds, starsIds) => {
    console.log({countryId, townsIds, starsIds})
   
    const prevState = get()._prevState

    if (prevState.countryId === countryId && 
        JSON.stringify(prevState.towns) === JSON.stringify(townsIds) && 
        JSON.stringify(prevState.stars) === JSON.stringify(starsIds)) {
      return;
    }
    
    set({
      _prevState: {
        countryId,
        towns: townsIds,
        stars: starsIds,
      },
    });

    const cityData = await fetchHotelsData({
      countryId,
      towns: townsIds,
      stars: starsIds,
    });
    if (cityData) {
      const mp = cityData.map((option) => {
        const firstLetter = option.Name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
          ...option,
        };
      });
      set({
        hotels: mp.sort(
          (a, b) => -b.firstLetter!.localeCompare(a.firstLetter!)
        ),
      });
    }
  },
}));
