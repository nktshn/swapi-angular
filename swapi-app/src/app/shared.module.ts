import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiDashboardComponent } from './components/swapi-dashboard/swapi-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SwapiResourceItemDetailsComponent } from './components/swapi-dashboard/swapi-resource-item-details/swapi-resource-item-details.component';
import { SwapiModule } from './components/swapi-dashboard/swapi.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SwapiModule,
  ],
  exports: [
    SwapiModule,
  ]
})
export class SharedModule { }
