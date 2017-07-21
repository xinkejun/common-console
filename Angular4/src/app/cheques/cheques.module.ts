import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ChequeService } from './cheque.service';

import { ChequeListComponent } from './cheque-list.component';
import { ChequeDetailComponent } from './cheque-detail.component';

import { ChequesRoutingModule } from './cheques-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChequesRoutingModule,
  ],
  declarations: [
    ChequeListComponent,
    ChequeDetailComponent,
  ],
  providers: [
    ChequeService
  ]
})
export class ChequesModule { }