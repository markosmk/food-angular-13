export interface SearchRecipesResponse {
  results: SearchResult[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface SearchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
