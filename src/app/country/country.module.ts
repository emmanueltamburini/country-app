import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCaptalComponent } from './pages/by-captial/by-captal.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryResumeComponent } from './pages/country-resume/country-resume.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    ByCaptalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryResumeComponent,
    CountryTableComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ByCaptalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryResumeComponent
  ]
})
export class CountryModule { }
