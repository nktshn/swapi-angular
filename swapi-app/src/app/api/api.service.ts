import { Injectable } from '@angular/core';
import { ApiMethods } from './api-methods';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpParams, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements Partial<ApiMethods> {

  isLoading: boolean;

  constructor(
    private httpClient: HttpClient,
  ) { }

  get<TContract>(url: string, params?: HttpParams): Observable<TContract> {
    this.isLoading = true;
    const headers = this.getHeaders();
    return this.httpClient.get<TContract>(url, {
      headers: headers,
      params: params || null,
    }).pipe(
      tap(_ => {
        this.isLoading = false;
      }),
      catchError(err => this.handleError<TContract>(err)),
    );
  };

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'authorization-mock',
    });
  }

  private handleError<TContract>(error: HttpErrorResponse): Observable<TContract> {
    return new Observable(obs => {
      alert(error.message); // mock
      obs.next(null);
    })
  }

}
