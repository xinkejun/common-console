import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans;

  constructor(
    private loanService: LoanService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans(): void {
    this.loanService.searchRecoveryLoan("", "", 1, 30)
      .subscribe(
      value => {
        this.loans = value.rows;
        //console.log(this.loans);
      });
  }

  onSelect(loan): void {
    this.router.navigate(['/loans', loan.loanaccountid]);
  }
}
