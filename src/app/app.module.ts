import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatGridListModule, MatSidenavModule} from '@angular/material';
import { AppService } from './services/app.service';
import { FlightComponent } from './flight/flight.component';
import {MinutesToHours} from './pipes/minutesToHr.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    MinutesToHours,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
