import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

import { Cheque } from './cheque.model';
import { ChequeService } from './cheque.service';

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
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params
            //.switchMap((p: Params) => this.chequeService.getCheque(p['id'])) //ok
            .switchMap((p: Params) => this.chequeService.getCheque(+p['id'])) //ok
            .subscribe(c => {
                this.cheque = c;
            });
        // this.activatedRoute.paramMap
        //     .switchMap((pm: ParamMap) =>
        //         this.chequeService.getCheque(+pm.get('id')))
        //     .subscribe(c => this.cheque = c);
    }

    goBack(): void {
        //this.location.back(); //easyway

        let cId = this.cheque ? this.cheque.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/cheques', { id: cId, foo: 'foo' }]);
    }

}