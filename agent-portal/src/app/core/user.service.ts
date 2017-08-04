import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) { }

    getLogininfo(username: string, password: string) {
        return this.http.post(this.config.apiBaseUrl + '/api/User/GetLogininfo?LoginName=' + username + '&LoginPassword=' + password + '&History=true', null);
    }
}