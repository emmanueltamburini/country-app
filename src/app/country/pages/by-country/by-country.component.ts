import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public query: string = '';

  constructor () {}

  public search(): void {
    console.log(this.query);
  }
}
