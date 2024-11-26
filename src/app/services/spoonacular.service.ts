import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularService {
  getRecipeDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/information?apiKey=${this.apiKey}`);
  }
  
  private apiKey = '8af4de3f87f64f409bd8bede8c4a4d73';
  private baseUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  getPopularRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/complexSearch?apiKey=${this.apiKey}&number=10`);
  }

}
