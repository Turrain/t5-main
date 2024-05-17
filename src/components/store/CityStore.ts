import { create } from "zustand";
import fetchCityData from "../api/fetchDepartCity";

interface CityStore {
  city: City | null;
  cities: City[];
  setCity: (city: City) => void;
  getCities: () => void;
}

export const useCityStore = create<CityStore>((set, get) => ({
  city: null,
  cities: [],
  setCity: (city) => set({ city }),
  getCities: async () => {
    if (get().cities.length > 1) return;
    const cityData = await fetchCityData();
    if (cityData) {
      const mappedCities = cityData.map((option: City) => ({
        ...option,
        firstLetter: /^[0-9]/.test(option.Name[0])
          ? "0-9"
          : option.Name[0].toUpperCase(),
      }));
      set({
        cities: mappedCities.sort(
          (a, b) => -b.firstLetter!.localeCompare(a.firstLetter!)
        ),
      });
    }
  },
}));
