import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
// import { SwapiService } from 'ng2-swapi';

@Component({
  selector: 'app-swapi-dashboard',
  templateUrl: './swapi-dashboard.component.html',
  styleUrls: ['./swapi-dashboard.component.scss'],
})
export class SwapiDashboardComponent implements OnInit {

  constructor(
    private swapi: SwapiService,
  ) { }

  ngOnInit() {
    this.swapi.getRoot().subscribe(res => {
      console.log(res);
    })
  }

}
