import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCaptialComponent } from './pages/by-captial/by-captial.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryResumeComponent } from './pages/country-resume/country-resume.component';



@NgModule({
  declarations: [
    ByCaptialComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryResumeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ByCaptialComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryResumeComponent
  ]
})
export class CountryModule { }
