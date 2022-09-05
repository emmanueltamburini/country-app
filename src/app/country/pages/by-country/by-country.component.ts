import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public query: string = '';
  public isError: boolean = false;

  constructor (private countryService: CountryService) {}

  public search(): void {
    this.isError = false;
    console.log(this.query);

    this.countryService.searchCountry(this.query)
      .subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (error) => {
          console.log('Error  ');
          console.log(error);
          this.isError = true;
        }
      });
  }
}
