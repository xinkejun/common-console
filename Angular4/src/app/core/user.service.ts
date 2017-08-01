// https://www.pointblankdevelopment.com.au/blog/113/aspnet-core-angular-24-user-registration-and-login-tutorial-example

// Crazy copy of the app/user.service
// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern
//
// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private config: AppConfig
    ) { }

    getAll() {
        return this.http.get(this.config.apiBaseUrl + '/users', this.jwt())
        .map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiBaseUrl + '/users/' + id, this.jwt())
        .map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.config.apiBaseUrl + '/users', user, this.jwt());
    }

    update(user: User) {
        return this.http.put(this.config.apiBaseUrl + '/users/' + user.id, user, this.jwt());
    }

    delete(id: number) {
        return this.http.delete(this.config.apiBaseUrl + '/users/' + id, this.jwt());
    }

    // private helper methods
    private jwt() {
        // create authorization header with token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}