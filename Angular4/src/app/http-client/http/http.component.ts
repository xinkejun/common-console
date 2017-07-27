import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  //selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HeroService],

})
export class HttpComponent implements OnInit {

  errorMessage: string;
  heroesArrayP: Hero[];
  heroesArrayO: Hero[];
  heroesObservableP: Observable<Hero[]>;
  heroesObservableO: Observable<Hero[]>;

  constructor(
    private service: HeroService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getHeroesArrayFromPromise();
    this.getHeroesArrayFromObservable();
    this.getHeroesObservableFromPromise();
    this.getHeroesObservableFromObservable();
  }

  getHeroesArrayFromPromise(): void {
    this.service.getHeroesPromise()
      .then(
      data => this.heroesArrayP = data,
      error => this.errorMessage = <any>error
      );
  }

  getHeroesArrayFromObservable(): void {
    this.service.getHeroesObservable()
      .subscribe(
      heroes => this.heroesArrayO = heroes,
      error => this.errorMessage = <any>error
      );
  }

  getHeroesObservableFromPromise(): void {
    this.heroesObservableP = this.activatedRoute.paramMap
      .switchMap(() => this.service.getHeroesPromise());
  }

  getHeroesObservableFromObservable(): void {
    this.heroesObservableO = this.service.getHeroesObservable()
  }

  addHeroPromise(name: string) {
    if (!name) { return; }
    this.service.addHeroPromise(name)
      .then(
      hero => this.heroesArrayP.push(hero),
      error => this.errorMessage = <any>error
      );
  }

  addHeroObservable(name: string) {
    if (!name) { return; }
    this.service.addHeroObservable(name)
      .subscribe(
      hero => this.heroesArrayO.push(hero),
      error => this.errorMessage = <any>error
      );
  }

}