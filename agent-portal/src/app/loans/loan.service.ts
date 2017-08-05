import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { LoanListResposne } from './loan.model';

@Injectable()
export class LoanService {
    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) { }

    searchRecoveryLoan(searchtext, sorttext, pageIndex, pageSize) {
        return this.http.post<LoanListResposne>(
            this.config.apiBaseUrl + '/api/LoanInfo/SearchRecoveryLoan?searchtext=' + searchtext + '&sortCondition=' + sorttext + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize,
            null);
    }

    getLoanMasterData(loanaccountid) {
        return this.http.post(
            this.config.apiBaseUrl + '/api/LoanInfo/GetLoanMasterData?loanaccountid=' + loanaccountid,
            null);
    }
}
