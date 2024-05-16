
// Define an interface for the API response structure
interface GetMealTypesResponse {
    GetMealsResult: {
      Data: MealType[];
    };
  }


export default async function fetchMealTypesData() {
    const url = `https://module.sletat.ru/Main.svc/GetMeals`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GetMealTypesResponse = await response.json();
      console.log(data.GetMealsResult.Data);
      return data.GetMealsResult.Data;
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  }