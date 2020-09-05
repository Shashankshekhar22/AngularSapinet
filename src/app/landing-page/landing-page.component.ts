import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../api-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  spaceXdataArray: any;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.dataLoading = true;
    this.dataService.getDataFromAPI();
    this.dataService.responseDataSubject.subscribe((response) => {
      this.spaceXdataArray = response;
      this.dataService.dataLoading = false;
    });
  }
}
