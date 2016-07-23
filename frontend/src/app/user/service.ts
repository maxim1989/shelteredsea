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
        // let user : User = {id: 10, name: 'Test User', is_auth: false};
        // return Promise.resolve(user);
        // return new Promise<User>(resolve =>
        //     setTimeout( () => resolve(user), 2000));
        // return Promise.reject(user);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}