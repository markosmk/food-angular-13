import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  SearchRecipesResponse,
  SearchResult,
} from '../interfaces/recipes.interface';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const baseUrlRecipes = 'https://api.spoonacular.com/recipes';

@Injectable({
  providedIn: 'root',
})
export class RefoodService {
  // private apiKey:string | undefined = apiKey
  private _history: string[] = [];
  public results: SearchResult[] = [];

  get history() {
    // break reference
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchFoods(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('apiKey', apiKey)
      .set('query', query)
      .set('number', 9)
      .set('maxFat', 25);

    this.http
      .get<SearchRecipesResponse>(`${baseUrlRecipes}/complexSearch`, { params })
      .subscribe((response) => {
        this.results = response.results;
        localStorage.setItem('results', JSON.stringify(response.results));
      });

    // this._history = [...new Set(this._history)];
    console.log(this._history);
  }
}
