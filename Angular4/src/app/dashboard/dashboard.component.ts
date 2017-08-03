import { Component, OnInit } from '@angular/core';

import { User } from '../core/user.model';
import { UserService } from '../core/user.service';
//import { AlertService } from '../core/alert.service'

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  //currentUser: User;
  //users: User[] = [];
  text: string;
  clickMessage = '';

  constructor(
    private userService: UserService,
    //private alertService: AlertService,
  ) {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.text = "<Test text here>";

    // this.userService.getTest()
    //   .subscribe(
    //   value => {
    //     this.text = JSON.stringify(value)
    //   },
    //   error => {
    //     console.log(error);
    //   });


    //this.alertService.sendSuccessMessage('Message from Home Component to App Component!', true);
    //this.loadAllUsers();
  }

  onClickMe() {
    //this.clickMessage = 'You are my hero!';

    this.userService.getTest()
      .subscribe(
      value => {
        this.clickMessage = JSON.stringify(value)
      },
      error => {
        console.log(error);
      });




  }

}