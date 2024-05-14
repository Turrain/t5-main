
// Define an interface for the API response structure
interface GetDepartCitiesResponse {
    GetDepartCitiesResult: {
      Data: City[];
    };
  }
  
export default  async function fetchCityData() {
    const url = "https://module.sletat.ru/Main.svc/GetDepartCities";
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GetDepartCitiesResponse = await response.json();
      console.log(data.GetDepartCitiesResult.Data);
      return data.GetDepartCitiesResult.Data;
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  }