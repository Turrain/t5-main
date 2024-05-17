import { create } from "zustand";
import fetchCountryCityData from "../api/fetchCountryCity";

interface CountryCityStore {
  countryCity: CountryCity[]; //selected
  countryCities: CountryCity[]; //all
  _prevState: { countryId?: number };
  setCountryCity: (countryCity: CountryCity[]) => void;
  getCountryCities: (countryId: number) => void;
}

export const useCountryCityStore = create<CountryCityStore>((set, get) => ({
  countryCity: [],
  countryCities: [],
  _prevState: {},
  setCountryCity: (countryCity) => {
    console.log(countryCity);
    set({ countryCity });
  },
  getCountryCities: async (countryId) => {
    const prevState = get()._prevState;

    if (prevState.countryId === countryId) {
      return;
    }

    set({
      _prevState: {
        countryId,
      },
    });

    const cityData = await fetchCountryCityData(countryId);
    if (cityData) {
      const mp = cityData.map((option) => {
        const firstLetter = option.Name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
          ...option,
        };
      });
      set({
        countryCities: mp.sort(
          (a, b) => -b.firstLetter!.localeCompare(a.firstLetter!)
        ),
      });
    }
  },
}));
