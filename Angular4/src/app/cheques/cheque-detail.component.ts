import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Cheque } from './shared/cheque.model';
import { ChequeService } from './shared/cheque.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'cheque-detail',
    templateUrl: './cheque-detail.component.html',
    //styleUrls: ['./cheque-detail.component.css']
})
export class ChequeDetailComponent implements OnInit {
    cheque: Cheque;

    constructor(
        private chequeService: ChequeService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((p: Params) => this.chequeService.getCheque(+p['id']))
            .subscribe(c => {
                this.cheque = c;
            });
    }

    goBack(): void {
        this.location.back();
    }

}