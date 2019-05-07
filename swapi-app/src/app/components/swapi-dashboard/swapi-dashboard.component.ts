import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Observable } from 'rxjs';
import { SwapiRoot } from 'src/app/models/swapi-root';
import { SwapiPeople } from 'src/app/models/swapi-people';
import { SwapiCollectionResult } from 'src/app/models/swapi-collection-result';
// import { SwapiService } from 'ng2-swapi';

@Component({
  selector: 'app-swapi-dashboard',
  templateUrl: './swapi-dashboard.component.html',
  styleUrls: ['./swapi-dashboard.component.scss'],
})
export class SwapiDashboardComponent implements OnInit {

  readonly firstTabResourse = 'people';

  existingSWAPIResoursesToGet: string[];
  people: SwapiPeople[]

  constructor(
    private swapi: SwapiService,
  ) { }

  ngOnInit() {
    this.loadDataForFirstTab().subscribe();
  }

  getRoot(): Observable<SwapiRoot> {
    return new Observable(obs => {
      this.swapi.getRoot().subscribe(res => {
        this.existingSWAPIResoursesToGet = Object.keys(res);
        obs.next(res);
      });
    });
  }

  loadDataForFirstTab(): Observable<SwapiCollectionResult<SwapiPeople[]>> {
    return new Observable(obs => {
      this.swapi.getPeople().subscribe(res => {
        this.people = res.results;
        console.log(this.people);
        obs.next(res);
      })
    });
  }

}
