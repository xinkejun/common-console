import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Router} from "@angular/router";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone(this.getAuthHeader());
        return next.handle(authReq)
            .do(event => {
                if (event instanceof HttpResponse) {
                    //console.log('%c Request for ' + this.fixUrl(req.urlWithParams) + ' took ' + elapsed + ' ms.', 'background: #222; color: yellow');
                }
            },
            err => {
                if (err instanceof HttpErrorResponse && err.status == 401) {
                    // handle 401 errors
                    this.router.navigate(['./pages/login']);
                }
            });
    }

    private getAuthHeader() {
        // create authorization header with token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            return { setHeaders: { Authorization: 'Bearer ' + currentUser.access_token } };
        }
        return {};
    }
}