import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoService } from './info.service';
import { CategoryService } from './category.service';

import { AlertModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { InfoComponent } from './info/info.component';
import { DisplayComponent } from './display/display.component';
import { ReportComponent } from './report/report.component';
import { ResultComponent } from './result/result.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent, InfoComponent, DisplayComponent, ReportComponent, ResultComponent, AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [InfoService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
