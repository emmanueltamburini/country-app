import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-captial',
  templateUrl: './by-captial.component.html',
})
export class ByCaptalComponent {

  public query: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];

  constructor (private countryService: CountryService) {}

  public search(query: string): void {
    this.isError = false;

    this.countryService.searchCapital(query)
      .subscribe({
        next: (response) => {
          this.countries = response;
        },
        error: (error) => {
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
