import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
//import 'rxjs/Rx';
import { HttpClient, HttpParams } from "@angular/common/http";
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
  //selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  courses$: Course[];
  results: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //     this.courses$ = this.http
    //       .get<Course[]>("https://angular-http-guide.firebaseio.com/courses.json", {params})
    //       .do(console.log)
    //       .map(data => _.values(data))
    // ;
    //alert(JSON.stringify(this.courses$));

    this.http.get('http://xfxwebapp01.azurewebsites.net/1.json', { observe: 'response' })
      .subscribe(resp => {
        //this.results = resp['results'];
        console.log(resp);
        console.log(resp.headers);
      });

    // this.results = this.http.get<ItemsResponse>('http://xfxwebapp01.azurewebsites.net/1.json')
    //   .map(data => _.values(data))
    //   console.log(this.results);

    // this.http.get("https://angular-http-guide.firebaseio.com/courses.json", { params })
    //   .subscribe(data => {
    //     console.log("firebase");
    //     console.log(data)
    //   });

  }

}