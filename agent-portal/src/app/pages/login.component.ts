import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../core/alert.service';
import { AuthService } from '../core/auth/auth.service';
import { UserService } from '../core/user.service';

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
    private userService: UserService,
  ) { }

  ngOnInit() {
    // reset login status
    this.authService.removeUserStorage();
    localStorage.removeItem('authorizationData');
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
      value => {
        //console.log(value.access_token);
        this.authService.addUserStorage(JSON.stringify(value));
        this.userService.getLogininfo(this.model.username, this.model.password)
          .subscribe(
          agent => {
            localStorage.setItem('authorizationData', JSON.stringify(agent));
            this.router.navigate([this.returnUrl]);
          });
      },
      error => {
        //console.log(error);
        let errDesc = error.error.error_description;
        this.alertService.sendErrorMessage(errDesc);
        this.loading = false;
      });
  }
}