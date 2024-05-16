
// Define an interface for the API response structure
interface GetDepartCitiesResponse {
    GetHotelStarsResult: {
      Data: HotelStar[];
    };
  }
interface HotelStarsData {
  townIds: number[];
  countryId: number;
}

export default async function fetchHotelStarsData({ townIds, countryId }: HotelStarsData) {
    const url = `https://module.sletat.ru/Main.svc/GetHotelStars?countryId=${countryId}&towns=${townIds.join(",")}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GetDepartCitiesResponse = await response.json();
      console.log(data.GetHotelStarsResult.Data);
      return data.GetHotelStarsResult.Data;
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  }