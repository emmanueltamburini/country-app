import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE } from '../constants/contants';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = API_BASE;

  constructor(private http: HttpClient) { }

  public searchCountry(query: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/name/${query}`;

    return this.http.get<Country[]>(url);
  }

  public searchCapital(query: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/capital/${query}`;

    return this.http.get<Country[]>(url);
  }
}
