
// Define an interface for the API response structure
interface GetMealTypesResponse {
    GetHotelsResult: {
      Data: Hotel[];
    };
  }
  interface HotelData {
    stars: number[];
    countryId: number;
    towns: number[]
  }

export default async function fetchHotelsData({stars, countryId , towns}: HotelData) {
    const url = `https://module.sletat.ru/Main.svc/GetHotels?countryId=${countryId}&towns=${towns.join(',')}&stars=${stars.join(',')}&filter=&all=-1`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GetMealTypesResponse = await response.json();
      console.log(data.GetHotelsResult.Data);
      return data.GetHotelsResult.Data;
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  }