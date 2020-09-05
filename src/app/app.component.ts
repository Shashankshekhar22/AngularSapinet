import { Component } from '@angular/core';
import { DataService } from './api-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ssr';
  constructor(public dataService: DataService) {

  }
}
