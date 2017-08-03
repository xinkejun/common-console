import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable'

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    //constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // // This is a duplicate. It is exactly the same as the original.
        // const dupReq = req.clone();

        // // Change the URL and replace 'http://' with 'https://'
        // const secureReq = req.clone({ url: req.url.replace('http://', 'https://') });

        return next.handle(req);
    }
}