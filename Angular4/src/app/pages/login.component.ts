import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../core/authentication.service';
import { AlertService } from '../core/alert.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      value => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error('Username or password is incorrect');
        this.loading = false;
      });
  }
}