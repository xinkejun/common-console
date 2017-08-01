import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule,
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
