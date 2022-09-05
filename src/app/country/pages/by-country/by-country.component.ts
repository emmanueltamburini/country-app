import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public query: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];

  constructor (private countryService: CountryService) {}

  public search(query: string): void {
    this.isError = false;

    this.countryService.searchCountry(query)
      .subscribe({
        next: (response) => {
          this.countries = response;
        },
        error: (error) => {
          console.log(error);
          this.countries = [];
          this.isError = true;
          this.query = query;
        }
      });
  }

  public getSuggestions(value: string) {
    this.isError = false;
  }
}
