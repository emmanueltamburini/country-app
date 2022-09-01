import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCaptalComponent } from './country/pages/by-captial/by-captal.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { CountryResumeComponent } from './country/pages/country-resume/country-resume.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'capital',
    component: ByCaptalComponent
  },
  {
    path: 'country/:id',
    component: CountryResumeComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
