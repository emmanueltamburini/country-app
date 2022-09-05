import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE } from '../constants/contants';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = API_BASE;

  constructor(private http: HttpClient) { }

  public searchCountry(query: string): Observable<any> {
    const url: string = `${this._apiUrl}/name/${query}`;

    return this.http.get(url);
  }
}
