/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Subject } from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'my-wiki-smart',
  templateUrl: './wiki-smart.component.html',
  providers: [WikipediaService]
})
export class WikiSmartComponent implements OnInit {
  
  items: Observable<string[]>;

  constructor(private service: WikipediaService) { }

  private searchTermStream = new Subject<string>();
  search(term: string) {
    this.searchTermStream.next(term);
  }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.service.search(term));
  }
}