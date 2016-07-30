import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private authUserUrl = 'auth/authenticated_user';

    constructor(private http: Http) { }

    getAuthUser() {
        return this.http.get(this.authUserUrl)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}