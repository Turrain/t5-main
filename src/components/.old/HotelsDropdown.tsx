// import * as React from "react";
// import Autocomplete from "@mui/joy/Autocomplete";
// import AutocompleteOption from "@mui/joy/AutocompleteOption";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import ListItemContent from "@mui/joy/ListItemContent";
// import Typography from "@mui/joy/Typography";
// import fetchCountryData from "./api/fetchCountry";
// import { flagsData } from "./api/flagsData";
// import { Chip, Stack } from "@mui/joy";
// import { useCountryCityStore } from "./CountryCityDropdown";
// import fetchHotelsData from "./api/fetchHotels";

// export function HotelsSelect() {
//     const [allHotels, setAllHotels] = React.useState<Hotel[]>([])
//     const { countries } = useCountryCityStore();
//     const { country } = useCountryStore()
//     const {HotelsStars} = useHotelsStarsStore()
//     const { hotels, setHotels } = useHotelsStore();

//     React.useEffect(() => {
//       const fetchData = async () => {
//         const cityData = await fetchHotelsData({countryId: country.Id, towns: countries.map(e => e.Id), stars: HotelsStars.map(e => e.Id)});
//         if (cityData) {
//           const mp = cityData.map((option) => {
//             const firstLetter = option.Name[0].toUpperCase();
//             return {
//               firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
//               ...option,
//             };
//           });
//           setAllHotels(mp);
//         }
//       };
  
//       fetchData();
//     }, [countries, country, HotelsStars]);
//     return (
//       <Autocomplete
//         id="country-select-demo"
//         placeholder="Выберите отель"
        
//         slotProps={{
//           input: {
//             autoComplete: "new-password", // disable autocomplete and autofill
//           },
//         }}
//         sx={{
      
//             borderColor: 'var(--variant-outlinedBorder, var(--joy-palette-primary-outlinedBorder, var(--joy-palette-primary-300, #97C3F0)))'
//           }}
//         options={allHotels}
//         autoHighlight
//         variant="outlined"
//         multiple={true}
//         onChange={(event,value)=> setHotels(value)}
//         getOptionLabel={(option) => option.Name}
        
//         renderOption={(props, option) => (
//           <AutocompleteOption {...props}>
           
//             <ListItemContent sx={{ fontSize: "sm" }}>
//               <Stack direction="row">
//                 <Typography level="body-sm" sx={{ flex: 1 }}>
//                   {option.Name}
//                 </Typography>
  
          
//               </Stack>
//             </ListItemContent>
//           </AutocompleteOption>
//         )}
//       />
//     );
//   }
// import create from 'zustand';
// import { useCountryStore } from "./CountrySelectV3";
// import { useHotelsStarsStore } from "./HotelStarDropdown";

// interface HotelsStore {
//   hotels: Hotel[];
//   setHotels: (countries: Hotel[]) => void;
// }

// export const useHotelsStore = create<HotelsStore>((set) => ({
//     hotels: [],
//     setHotels: (hotels) => {console.log(hotels); set({ hotels })},
// }));