// Define an interface for the city data
interface City {
  Id: number;
  Name: string;
  Default: boolean;
  DescriptionUrl: string | null;
  IsPopular: boolean;
  ParentId: number | null;
}

interface Country {
  Id: number;
  Name: string;
  Alias: string | null;
  Flags: number;
  HasTickets: boolean;
  HotelIsNotInStop: boolean;
  IsProVisa: boolean;
  IsVisa: boolean;
  OriginalName: string;
  Rank: number;
  TicketsIncluded: boolean;
}

interface CountryCity {
  Id: number;
  Name: string;
  Default: boolean;
  DescriptionUrl: string | null;
  IsPopular: boolean;
  ParentId: number | null;
}
interface HotelStar {
  Id: number;
  Name: string;
}
interface MealType {
  Id: number;
  Name: string;
}
interface Hotel {
  Id: number;
  Name: string;
  CommonRate: number;
  IsInBonusProgram: boolean;
  PhotosCount: number;
  PopularityLevel: number;
  Rate: number;
  SearchCount: number;
  StarId: number;
  StarName: string;
  TownId: number;
}