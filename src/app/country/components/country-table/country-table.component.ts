import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  @Input('countries')
  public countries: Country[] = [];
}
