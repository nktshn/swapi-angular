import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiDashboardComponent } from './swapi-dashboard.component';
import { SwapiResourceItemDetailsComponent } from './swapi-resource-item-details/swapi-resource-item-details.component';

@NgModule({
  declarations: [
    SwapiDashboardComponent,
    SwapiResourceItemDetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwapiDashboardComponent,
    SwapiResourceItemDetailsComponent,
  ]
})
export class SwapiModule { }
