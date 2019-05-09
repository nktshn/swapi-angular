import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Observable, pipe, of, concat } from 'rxjs';
import { SwapiRoot } from 'src/app/models/swapi-root';
import { SwapiPeople } from 'src/app/models/swapi-people';
import { SwapiCollectionResult } from 'src/app/models/swapi-collection-result';
import { concatAll } from 'rxjs/operators';
import { ResourceDataList } from './resource-data-list';
import { cloneDeep } from 'src/app/utils/util-functions';
// import { SwapiService } from 'ng2-swapi';

@Component({
  selector: 'app-swapi-dashboard',
  templateUrl: './swapi-dashboard.component.html',
  styleUrls: ['./swapi-dashboard.component.scss'],
})
export class SwapiDashboardComponent implements OnInit {

  readonly firstTabResource: string = 'people';
  isSomeResourceNotAvailable: boolean = false;

  existingSWAPIResourcesToGet: string[] = [];
  resourceDataList: ResourceDataList<any>;
  selectedResourceItem: any;

  constructor(
    private swapi: SwapiService,
  ) { }

  ngOnInit() {
    this.initData();
  }

  getRoot(): Observable<SwapiRoot> {
    return new Observable(obs => {
      this.swapi.getRoot().subscribe(res => {
        this.existingSWAPIResourcesToGet = Object.keys(res);
        obs.next(res);
        obs.complete();
      });
    });
  }

  loadDataForFirstTab(): Observable<SwapiCollectionResult<SwapiPeople[]>> {
    return new Observable(obs => {
      const isPeopleResourceExists: boolean = this.existingSWAPIResourcesToGet.some(res => res === this.firstTabResource);
      isPeopleResourceExists && this.swapi.getPeople().subscribe(res => {
        this.resourceDataList = {
          listOfItems: res.results,
          itemLabel: 'name',
        };
        this.isSomeResourceNotAvailable = false;
        obs.next(res);
        obs.complete();
      }, err => {
        this.isSomeResourceNotAvailable = false;
      });
    });
  }

  /**
   * inits data for first tab
   */
  initData(): void {
    const observablesToSubscribe = [this.getRoot(), this.loadDataForFirstTab()];
    concat(...observablesToSubscribe).subscribe(_ => { });
  }

  onSelectResourceItem(resourceItem: any): void {
    this.selectedResourceItem = cloneDeep(resourceItem);
  }

  onSelectResource(resource: string): void {
  }

}
