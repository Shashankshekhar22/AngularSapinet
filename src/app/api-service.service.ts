import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
const LANDING_PAGE_URL = 'https://api.spacexdata.com/v3/launches?limit=100';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  responseDataSubject: Subject<any> = new Subject<any>();
  dataLoading = false;

  constructor(private http: HttpClient) { }

  getDataFromAPI(queryData?: HttpParams) {
    this.http.get(LANDING_PAGE_URL, { params: queryData }).subscribe(responseData => {
      this.responseDataSubject.next(responseData);
    });
  }
}
