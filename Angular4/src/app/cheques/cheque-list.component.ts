import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cheque } from './cheque.model';
import { ChequeService } from './cheque.service';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'cheque-list',
    templateUrl: './cheque-list.component.html',
    styleUrls: ['./cheque-list.component.css'],
})
export class ChequeListComponent implements OnInit {
    cheques: Cheque[];
    constructor(
        private chequeService: ChequeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getCheques()
    }

    getCheques(): void {
        this.chequeService
            .getCheques()
            .then(arr => this.cheques = arr);
            // .then(arr => this.cheques = arr.sort(
            //     ((left, right): number => {
            //         if (left.date > right.date) return -1;
            //         if (left.date < right.date) return 1;
            //         return 0;
            //     })
            // ))
    }

    onSelect(cheque: Cheque): void {
        this.router.navigate(['/cheques', cheque.id]);
    }

}
