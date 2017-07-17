import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ChequeListComponent } from './cheques/cheque-list.component';
import { ChequeDetailComponent } from './cheques/cheque-detail.component';
import { ChequeService } from './cheques/shared/cheque.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    //FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    ChequeListComponent,
    ChequeDetailComponent
  ],
  providers: [
    ChequeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
