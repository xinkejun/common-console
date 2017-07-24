import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  results: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var aaa = this.http.get('/api/cheques')
    //.toPromise()
    //.then(response => response.json().data)
    //alert(JSON.stringify(aaa));
    //.then(response => response.json().data as Cheque)

    this.http.get('/api/items.txt').subscribe(data => {
      //this.results = data['results'];
      //alert(JSON.stringify(data));
    });
  }

  // getCheques(): Promise<Cheque[]> {
  //   return this.http.get(this.chequesUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Cheque[])
  // }
}
