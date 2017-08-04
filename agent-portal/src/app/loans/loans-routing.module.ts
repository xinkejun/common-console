import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoanListComponent,
  },
  {
    path: 'details',
    component: LoanDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }