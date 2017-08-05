import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
  loand;

  constructor(
    private loanService: LoanService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .switchMap((p: Params) => this.loanService.getLoanMasterData(p['id']))
      .subscribe(l => {
        this.loand = l[0];
      });
  }
}