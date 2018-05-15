import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
