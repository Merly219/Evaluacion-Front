import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private apiUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get<any>(url);
  }
}
