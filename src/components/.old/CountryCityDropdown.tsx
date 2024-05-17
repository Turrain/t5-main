// import * as React from "react";
// import Autocomplete from "@mui/joy/Autocomplete";
// import AutocompleteOption from "@mui/joy/AutocompleteOption";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import ListItemContent from "@mui/joy/ListItemContent";
// import Typography from "@mui/joy/Typography";

// import { Chip, Stack } from "@mui/joy";


// interface CountryCitySelectV3Props {
//     id: number
// }

// export function CountryCitySelectV3({id}: CountryCitySelectV3Props) {
//   const [allCountries, setAllCountries] = React.useState([])
//   const { countries, setCountries } = useCountryCityStore();
//   React.useEffect(() => {
//     const fetchData = async () => {
//       const cityData = await fetchCountryCityData(id);
//       if (cityData) {
//         const mp = cityData.map((option) => {
//           const firstLetter = option.Name[0].toUpperCase();
//           return {
//             firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
//             ...option,
//           };
//         });
//         setAllCountries(mp);
//       }
//     };

//     fetchData();
//   }, [id]);
//   return (
//     <Autocomplete
//       id="country-select-demo"
//       placeholder="Выберите курорт"
//       slotProps={{
//         input: {
//           autoComplete: "new-password", // disable autocomplete and autofill
//         },
//       }}
//       sx={{ width: 300 }}
//       options={allCountries}
//       autoHighlight
//       variant="plain"
//       multiple={true}
//       onChange={(event,value)=> setCountries(value)}
//       getOptionLabel={(option) => option.Name}
//       renderOption={(props, option) => (
//         <AutocompleteOption {...props}>
         
//           <ListItemContent sx={{ fontSize: "sm" }}>
//             <Stack direction="row">
//               <Typography level="body-sm" sx={{ flex: 1 }}>
//                 {option.Name}
//               </Typography>

        
//             </Stack>
//           </ListItemContent>
//         </AutocompleteOption>
//       )}
//     />
//   );
// }
// import create from 'zustand';

// interface CountryCityStore {
//   countries: CountryCity[];
//   setCountries: (countries: CountryCity[]) => void;
// }

// export const useCountryCityStore = create<CountryCityStore>((set) => ({
//   countries: [],
//   setCountries: (countries) => {console.log(countries); set({ countries })},
// }));

// function fetchCountryCityData(id: number) {
//   throw new Error("Function not implemented.");
// }
