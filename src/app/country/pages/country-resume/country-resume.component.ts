import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-resume',
  templateUrl: './country-resume.component.html',
})
export class CountryResumeComponent implements OnInit {

  public country!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countrySerive: CountryService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.countrySerive.getCountryById(id)),
        tap(console.log)
      )
      .subscribe(country => this.country = country)
  }

}
