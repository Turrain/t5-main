// import { Box, Chip, Select, Option } from "@mui/joy";
// import React from "react";
// import fetchHotelStarsData from "./api/fetchHotelStars";
// import { useCountryCityStore } from "./CountryCityDropdown";
// import { useCountryStore } from "./CountrySelectV3";
// import { Typography } from "@mui/material";

  
// export function HotelStarDropdown () {
//     const { countries } = useCountryCityStore();
//     const { country } = useCountryStore()
//     const [stars, setStars] = React.useState<HotelStar[]>([]);
//     const { HotelStars, setHotelsStars } = useHotelsStarsStore();

//     React.useEffect(() => {
//       const fetchData = async () => {
//         const cityData = await fetchHotelStarsData({townIds: countries.map(e => e.Id), countryId: country.Id});
//         if (cityData) {
//           const mp = cityData.map((option) => {
//             const firstLetter = option.Name[0].toUpperCase();
//             return {
//               firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
//               ...option,
//             };
//           });
//           setStars(mp.sort(
//             (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
//           ));
//         }
//       };
  
//       fetchData();
//     }, [countries, country]);
//     return (
//         <Select variant="outlined"
//         multiple
//         onChange={(event,value)=> setHotelsStars(value)}
//         placeholder={(<Typography color='primary' sx={{
          
//             fontFamily: 'var(--joy-fontFamily-body)',
//             fontWeight: 'var(--joy-fontWeight-lg)',
//             fontSize: 'var(--joy-fontSize-sm)',
//             lineHeight: 'var(--joy-lineHeight-md'}}>
//             Кол-во звезд
//         </Typography>)}
//         renderValue={(selected) => (
//           <Box sx={{ display: 'flex', gap: '0.25rem' }}>
//             {selected.map((selectedOption) => (
//               <Chip variant="soft" color="primary">
//                 {selectedOption.label}
//               </Chip>
//             ))}
//           </Box>
//         )}
//         sx={{
      
//           borderColor: 'var(--variant-outlinedBorder, var(--joy-palette-primary-outlinedBorder, var(--joy-palette-primary-300, #97C3F0)))'
//         }}
//         slotProps={{
//           listbox: {
//             sx: {
//               width: '100%',
//             },
//           },
//         }}
//       >
//         {stars.map(e => (
//   <Option value={e.Id}>{e.Name}</Option>
//         ))}
      
        
//       </Select>
//     )
// }
// import create from 'zustand';

// interface HotelsStarsStore {
//   HotelsStars: Hotel[];
//   setHotelsStars: (hotels: Hotel[]) => void;
// }

// export const useHotelsStarsStore = create<HotelsStarsStore>((set) => ({
//     HotelsStars: [],
//     setHotelsStars: (HotelsStars) => {console.log(HotelsStars); set({ HotelsStars })},
// }));