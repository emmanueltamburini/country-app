import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public query: string = '';

  constructor (private countryService: CountryService) {}

  public search(): void {
    console.log(this.query);

    this.countryService.searchCountry(this.query)
      .subscribe(response => console.log(response));
  }
}
