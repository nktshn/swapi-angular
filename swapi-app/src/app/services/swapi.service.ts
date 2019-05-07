import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiRoot } from '../models/swapi-root';
import { ApiService } from '../api/api.service';
import { Endpoints } from '../api/endpoints';
import { SwapiPeople } from '../models/swapi-people';
import { SwapiCollectionResult } from '../models/swapi-collection-result';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private apiService: ApiService,
  ) { }

  getRoot(): Observable<SwapiRoot> {
    return this.apiService.get<SwapiRoot>(Endpoints.root());
  }

  getPeople(): Observable<SwapiCollectionResult<SwapiPeople[]>> {
    return this.apiService.get<SwapiCollectionResult<SwapiPeople[]>>(Endpoints.people());
  }
}
