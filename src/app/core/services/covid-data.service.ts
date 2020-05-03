import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CovidStateData } from 'src/app/main-dashboard/models/state-wise-data-models/covid-state-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  private covidStateApiUrl: string = "https://api.covid19india.org/data.json";

  private covidDistrictApiUrl: string = "https://api.covid19india.org/state_district_wise.json";


  constructor(private http: HttpClient) { }

  getCovidStateData(): Observable<CovidStateData> {
    return this.http.get<CovidStateData>(this.covidStateApiUrl).pipe(catchError(this.handleError))
  }

  getCovidDistrictData(): Observable<Object> {
    return this.http.get<Object>(this.covidDistrictApiUrl).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
