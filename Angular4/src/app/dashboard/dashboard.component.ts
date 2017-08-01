import { Component, OnInit } from '@angular/core';

import { User } from '../core/user.model';
import { UserService } from '../core/user.service';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    //this.userService.getAll().subscribe(users => { this.users = users; });
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }
}