import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPannelComponent } from './filter-pannel/filter-pannel.component';
import { DataService } from './api-service.service';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, FilterPannelComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-ssr' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
