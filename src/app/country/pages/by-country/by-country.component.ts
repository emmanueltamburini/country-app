import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {
  public query: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  public suggestions: Country[] = [];
  public hideSuggestion: boolean = true;

  constructor (private countryService: CountryService) {}

  public search(query: string): void {
    this.isError = false;
    this.hideSuggestion = true;

    this.countryService.searchCountry(query)
      .subscribe({
        next: (response) => {
          this.countries = response;
        },
        error: () => {
          this.countries = [];
          this.isError = true;
          this.query = query;
        }
      });
  }

  public getSuggestions(value: string): void {
    this.isError = false;
    this.query = value;
    this.hideSuggestion = false;
    this.countryService.searchCountry(value, true)
    .subscribe({
      next: (response) => {
        this.suggestions = response.splice(0, 5);
      },
      error: () => {
        this.suggestions = [];
      }
    });
  }
}
