// https://www.pointblankdevelopment.com.au/blog/113/aspnet-core-angular-24-user-registration-and-login-tutorial-example
import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map'

import { AppConfig } from '../../app.config';

interface TokenResponse {
    access_token: string;
}

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private config: AppConfig,
    ) { }

    login(username: string, password: string) {
        let body = "grant_type=password&username=" + username + "&password=" + password;
        let headers = new HttpHeaders()
        //.set('Content-Type', 'application/x-www-form-urlencoded');
        //console.log(headers);
        return this.http.post<TokenResponse>(this.config.apiBaseUrl + '/token', body, { headers: headers });
    }

    addUserStorage(data: string) {
        localStorage.setItem('currentUser', data);
    }

    removeUserStorage() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getAuthHeader() {
        // create authorization header with token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            return 'Bearer ' + currentUser.access_token;
        }
        return null;
    }
}