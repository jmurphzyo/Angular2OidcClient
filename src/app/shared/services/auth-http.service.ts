import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth.service';

@Injectable()
export class AuthHttpService {
    constructor(private http: Http, private authService: AuthService) { }
    /**
   * Example of how you can make auth request using angulars http methods.
   * @param options if options are not supplied the default content type is application/json
   */
    get(url: string, options?: RequestOptions): Observable<Response> {

        if (options) {
            options = this.authService._setRequestOptions(options);
        } else {
            options = this.authService._setRequestOptions();
        }
        return this.http.get(url, options);
    }
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    put(url: string, data: any, options?: RequestOptions): Observable<Response> {

        const body = JSON.stringify(data);

        if (options) {
            options = this.authService._setRequestOptions(options);
        } else {
            options = this.authService._setRequestOptions();
        }
        return this.http.put(url, body, options);
    }
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    delete(url: string, options?: RequestOptions): Observable<Response> {

        if (options) {
            options = this.authService._setRequestOptions(options);
        } else {
            options = this.authService._setRequestOptions();
        }
        return this.http.delete(url, options);
    }
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    post(url: string, data: any, options?: RequestOptions): Observable<Response> {

        const body = JSON.stringify(data);

        if (options) {
            options = this.authService._setRequestOptions(options);
        } else {
            options = this.authService._setRequestOptions();
        }
        return this.http.post(url, body, options);
    }
}