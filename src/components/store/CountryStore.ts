import { create } from "zustand";
import { flagsData } from "../api/flagsData";
import { fetchCountryData } from "../api/fetchCountry";

interface CountryStore {
  country: Country | null;
  setCountry: (country: Country) => void;
  countries: Country[]
  getCountries: (cityId: number) => void;
}

export const useCountryStore = create<CountryStore>((set) => ({
  country: null,
  countries: [],
  setCountry: (country) => set({ country }),
  getCountries: async (cityId) => {
    
    if(!cityId) return;
    const cityData = await fetchCountryData(cityId);
    if (cityData) {
      const mappedCountries = cityData.map((option) => ({
        ...option,
        firstLetter: /^[0-9]/.test(option.Name[0])
          ? "0-9"
          : option.Name[0].toUpperCase(),
        flag: flagsData[option.OriginalName],
      }));
      set({
        countries: mappedCountries.sort(
          (a, b) => -b.firstLetter!.localeCompare(a.firstLetter!)
        ),
      });
    }
  }

}));