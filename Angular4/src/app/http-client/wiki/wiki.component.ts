import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'my-wiki',
  templateUrl: './wiki.component.html',
  providers: [WikipediaService]
})
export class WikiComponent {

  items: Observable<string[]>;

  constructor(private service: WikipediaService) { }


  search(term: string) {
    this.items = this.service.search(term);
  }

}