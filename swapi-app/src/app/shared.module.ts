import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiDashboardComponent } from './components/swapi-dashboard/swapi-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SwapiDashboardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
   exports: [
    SwapiDashboardComponent,
   ]
})
export class SharedModule { }
