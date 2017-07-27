import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import * as _ from 'lodash';

interface Course {
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}

interface ItemsResponse {
  results: string[];
}

const params = new HttpParams()
  .set('orderBy', '"$key"')
  .set('limitToFirst', "3");


@Component({
  //selector: 'app-common-http',
  templateUrl: './common-http.component.html',
  styleUrls: ['./common-http.component.css']
})
export class CommonHttpComponent implements OnInit {

  courses$: Course[];
  results: string[];
  private heroesUrl = 'http://xfxwebapp01.azurewebsites.net/ashx/herohandler.ashx';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // Making a request for JSON data
    // this.http.get('http://xfxwebapp01.azurewebsites.net/1.json')
    //   .subscribe(resp => {
    //     this.results = resp['results'];
    //     console.log(resp);
    //   });

    // Typechecking the response
    // this.http.get<ItemsResponse>('http://xfxwebapp01.azurewebsites.net/1.json')
    //   .subscribe(data => {
    //     // data is now an instance of type ItemsResponse, so you can do this:
    //     this.results = data.results;
    //     console.log(data);
    //   });

    // Reading the full response
    // this.http.get('http://xfxwebapp01.azurewebsites.net/heroes.json', { observe: 'response' })
    //   .subscribe(resp => {
    //     console.log(resp);
    //   });

    //Error handling
    // this.http.get('http://xfxwebapp01.azurewebsites.net/heroes1111.json')
    //   .subscribe(
    //   // Successful responses call the first callback.
    //   resp => { console.log(resp); },
    //   // Errors will call this callback instead:
    //   (err: HttpErrorResponse) => {
    //     console.log(err);
    //     if (err.error instanceof Error) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.log('An error occurred:', err.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong,
    //       console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     }
    //   });

    // this.http.get(this.heroesUrl)
    //   .subscribe(
    //   resp => console.log(resp['data'])
    //   );

    this.http.post(this.heroesUrl, { name: 'kejun xin' },
      {
        params: new HttpParams().set('id', '3'),
      }
    )
      .subscribe(
      resp => console.log(resp)
      );


  }
}