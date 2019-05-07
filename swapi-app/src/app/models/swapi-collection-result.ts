export interface SwapiCollectionResult<T> {
    count: number,
    next: string,
    previous: string,
    results: T;
}