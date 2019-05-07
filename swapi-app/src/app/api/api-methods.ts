import { Observable } from 'rxjs';

export abstract class ApiMethods {
    abstract get<TContract>(url: string): Observable<TContract>;
    abstract post<TContract>(url: string, model: TContract): Observable<TContract>;
    abstract post<TContract, TResponseContract>(url: string, model: TContract): Observable<TResponseContract>;
    abstract patch<TContract>(url: string, model: Partial<TContract>): Observable<TContract>;
    abstract patch<TContract, TResponseContract>(url: string, model: Partial<TContract>): Observable<TResponseContract>;
    abstract put<TContract>(url: string, model: TContract): Observable<TContract>;
    abstract delete<TContract>(url: string): Observable<TContract>;
}