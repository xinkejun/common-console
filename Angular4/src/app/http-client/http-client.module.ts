import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoHttpComponent } from './no-http/no-http.component';
import { HttpComponent } from './http/http.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { CommonHttpComponent } from './common-http/common-http.component';

import { NoopInterceptor } from './common-http/noop-interceptor.service';

import { HttpClientRoutingModule } from './http-client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    HttpClientRoutingModule,
  ],
  declarations: [
    NoHttpComponent,
    HttpComponent,
    WikiComponent,
    WikiSmartComponent,
    CommonHttpComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  }],
})
export class HttpClientModule { }