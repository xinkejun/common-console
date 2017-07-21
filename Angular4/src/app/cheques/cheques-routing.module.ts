import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChequeListComponent } from './cheque-list.component';
import { ChequeDetailComponent } from './cheque-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: ChequeListComponent,
    data: {
      title: 'Cheques'
    },
  },
  {
    path: ':id',
    component: ChequeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChequesRoutingModule { }