import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://xfxwebapp01.azurewebsites.net/ashx/herohandler.ashx';

  constructor(private http: Http) { }

  getHeroesPromise(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(this.extractData, this.handleErrorPromise);
    //.then(this.extractData).catch(this.handleErrorPromise);
  }

  getHeroesObservable(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(this.extractData, this.handleErrorObservable);
    //.map(this.extractData).catch(this.handleErrorObservable);
  }

  addHeroPromise(name: string): Promise<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, { name }, options)
      .toPromise()
      .then(this.extractData, this.handleErrorPromise)
    //.then(this.extractData).catch(this.handleErrorPromise);
  }

  addHeroObservable(name: string): Observable<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions();

    return this.http.post(this.heroesUrl, { name })
      .map(this.extractData, this.handleErrorObservable);
    //.map(this.extractData).catch(this.handleErrorObservable);
  }

  private extractData(resp: Response) {
    let body = resp.json();
    return body.data || {};
  }

  private handleErrorPromise(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg); //////////////
  }

  private handleErrorObservable(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg); ////////
  }

}