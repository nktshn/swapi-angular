import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiRoot } from '../models/swapi-root';
import { ApiService } from '../api/api.service';
import { Endpoints } from '../api/endpoints';

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
}
