import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCaptalComponent } from './pages/by-captial/by-captal.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryResumeComponent } from './pages/country-resume/country-resume.component';



@NgModule({
  declarations: [
    ByCaptalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryResumeComponent
  ],
  imports: [
    CommonModule,
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
