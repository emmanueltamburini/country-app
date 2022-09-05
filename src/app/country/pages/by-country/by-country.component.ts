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

  public search(): void {
    this.isError = false;
    console.log(this.query);

    this.countryService.searchCountry(this.query)
      .subscribe({
        next: (response) => {
          this.countries = response;
        },
        error: (error) => {
          console.log(error);
          this.countries = [];
          this.isError = true;
        }
      });
  }
}
