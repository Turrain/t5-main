
// Define an interface for the API response structure
interface GetCountriesResponse {
  GetCountriesResult: {
      Data: Country[];
    };
  }
  
export default  async function fetchCountryData(id:number) {
    const url = `https://module.sletat.ru/Main.svc/GetCountries?townFromId=${id}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GetCountriesResponse = await response.json();
      console.log(data.GetCountriesResult.Data);
      return data.GetCountriesResult.Data;
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  }