import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Hero, HeroService } from './hero.service';

@Component({
  templateUrl: './no-http.component.html',
  providers: [HeroService],
})
export class NoHttpComponent implements OnInit {

  heroesArray: Hero[];
  heroesObservable: Observable<Hero[]>;
  //private selectedId: number;

  constructor(
    private service: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHeroesArrayFromPromise();
    this.getHeroesObservableFromPromise();
  }

  getHeroesArrayFromPromise() {
    this.service.getHeroesPromise()
      .then(arr => this.heroesArray = arr);
  }

  getHeroesObservableFromPromise() {
    // paramMap
    this.heroesObservable = this.activatedRoute.paramMap //paramMap
      // .switchMap((pm: ParamMap) => {
      //   // (+) before `pm.get()` turns the string into a number
      //   this.selectedId = +pm.get('id');
      //   return this.service.getHeroes();
      // }); //ok
      //.switchMap((pm: ParamMap) => {return this.service.getHeroes();}); //ok
      //.switchMap((pm: ParamMap) => this.service.getHeroes()); //ok
      .switchMap(() => this.service.getHeroesPromise()); //ok

    // params
    /*
    this.heroArrayObservable = this.activatedRoute.params //paramMap
      //.switchMap((p: Params) => this.service.getHeroes()) //ok
      .switchMap(() => this.service.getHeroes()) //ok
      */
  }

  //isSelected(hero: Hero) { return hero.id === this.selectedId; }

  // onSelect(hero: Hero) {
  //   this.router.navigate(['/hero', hero.id]);
  // }
}