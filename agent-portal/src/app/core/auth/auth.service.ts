import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

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
        return this.http.post<TokenResponse>(this.config.apiBaseUrl + '/token', body, { headers: headers });
    }

    addUserStorage(data: string) {
        localStorage.setItem('currentUser', data);
    }

    removeUserStorage() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}