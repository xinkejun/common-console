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
    this.authenticationService.removeUserStorage();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      value => {
        //console.log(value.access_token);
        this.alertService.success(value.access_token);
        this.authenticationService.addUserStorage(JSON.stringify(value.access_token));
        //this.router.navigate([this.returnUrl]);
      },
      error => {
        let errDesc = error.error.error_description;
        //console.log(error.error.error_description);
        this.alertService.error(errDesc);
        this.loading = false;
      });
  }
}