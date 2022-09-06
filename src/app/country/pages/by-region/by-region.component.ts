import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class ByRegionComponent{
  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public currentRegion: string =  '';
  public countries: Country[] = [];
  public isError: boolean = false;

  constructor (private countryService: CountryService) {}

  public activeRegion(region: string): void {
    if (region === this.currentRegion) { return; }
    this.currentRegion = region;
    this.countries = [];
    this.countryService.searchRegion(region)
      .subscribe({
        next: (response) => {
          this.countries = response;
        },
        error: () => {
          this.countries = [];
          this.isError = true;
        }
      });
    }

  public getClassCss(region: string): string {
    return this.currentRegion === region ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}
