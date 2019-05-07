import { Observable } from 'rxjs';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';

export interface ApiMethods {
    get<TContract>(url: string, params?: HttpParams): Observable<TContract>;
    post<TContract>(url: string, model: TContract): Observable<TContract>;
    post<TContract, TResponseContract>(url: string, model: TContract): Observable<TResponseContract>;
    patch<TContract>(url: string, model: Partial<TContract>): Observable<TContract>;
    patch<TContract, TResponseContract>(url: string, model: Partial<TContract>): Observable<TResponseContract>;
    put<TContract>(url: string, model: TContract): Observable<TContract>;
    delete<TContract>(url: string): Observable<TContract>;
}