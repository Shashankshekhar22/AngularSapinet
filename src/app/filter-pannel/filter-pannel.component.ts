import { Component, OnInit } from '@angular/core';
import { DataService } from '../api-service.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-filter-pannel',
  templateUrl: './filter-pannel.component.html',
  styleUrls: ['./filter-pannel.component.scss'],
})
export class FilterPannelComponent implements OnInit {
  launchYears = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
    '2018', '2019', '2020',
  ];

  launchYear = '';
  launchSuccess = '';
  landSucess = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  filterData(queryParms: string, queryParmsValue: string) {
    this.dataService.dataLoading = true;
    if (queryParms === 'launch_year') {
      this.launchYear = queryParmsValue;
    }
    if (queryParms === 'launch_success') {
      this.launchSuccess = queryParmsValue;
    }
    if (queryParms === 'land_success') {
      this.landSucess = queryParmsValue;
    }
    const reqQueryParms: HttpParams = new HttpParams({
      fromObject: {
        launch_year: this.launchYear, // queryParms === 'launch_year' ? qeryParmsValue : null
        launch_success: this.launchSuccess,
        land_success: this.landSucess,
      }
    });
    if (queryParms !== 'Reset') {
      this.dataService.getDataFromAPI(reqQueryParms);
    } else {
      this.launchYear = '';
      this.launchSuccess = '';
      this.landSucess = '';
      this.dataService.getDataFromAPI();
    }
  }
}
