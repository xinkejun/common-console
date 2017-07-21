import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  templateUrl: 'crisis-list.component.html',
  styleUrls: ['crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  //crises: Crisis[];
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.crises = this.route.paramMap
      .switchMap((pm: ParamMap) => {
        this.selectedId = +pm.get('id');
        return this.service.getCrises();
      });
    //this.service.getCrises().then(arr => this.crises = arr);;

  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}