import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  results: string[];
  private testUrl = 'http://xfxwebapp01.azurewebsites.net/ashx/iphandler.ashx';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //let headers = new Headers({ 'Content-Type': 'text/plain' });

    this.http.get(this.testUrl)
      .subscribe(resp => {
        //this.results = resp['results'];
        console.log(resp);
      });
  }

}