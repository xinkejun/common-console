import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../core/auth/auth.service';
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
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    // reset login status
    this.authService.removeUserStorage();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
      value => {
        //console.log(value.access_token);
        //this.alertService.sendSuccessMessage(value.access_token, true);
        this.authService.addUserStorage(JSON.stringify(value));
        this.router.navigate([this.returnUrl]);
      },
      error => {
        //console.log(error);
        let errDesc = error.error.error_description;
        this.alertService.sendErrorMessage(errDesc);
        this.loading = false;
      });
  }
}