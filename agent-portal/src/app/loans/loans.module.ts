import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';
import { LoansRoutingModule } from './loans-routing.module';

// Services
import { LoanService } from './loan.service';

// Componets
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';

@NgModule({
  imports: [
    SharedModule,
    LoansRoutingModule,
  ],
  declarations: [
    LoanListComponent,
    LoanDetailComponent,
  ],
  providers: [
    LoanService,
  ]
})
export class LoansModule { }