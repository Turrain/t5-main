
// Define an interface for the API response structure
interface GetCountryCityResponse {
    GetCitiesResult: {
        Data: CountryCity[];
      };
    }
    
  export default  async function fetchCountryCityData(id:number) {
      const url = `https://module.sletat.ru/Main.svc/GetCities?countryId=${id}`;
    
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: GetCountryCityResponse = await response.json();
        console.log(data.GetCitiesResult.Data);
        return data.GetCitiesResult.Data;
      } catch (error) {
        console.error("Failed to fetch city data:", error);
      }
    }