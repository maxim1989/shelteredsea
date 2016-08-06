import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchUserService {
    private SEARCH_USER_URL = 'auth/authenticated_user';

    constructor(private http: Http) { }

    getUserByID(ID : string) {
        return new Promise<User>(resolve => {
            let user = new User();
            user.id = 123;
            user.username = "Hello world";
            setTimeout(() => resolve(user), 2000);
        });

        // return this.http.get(this.SEARCH_USER_URL)
        //     .toPromise()
        //     .then(
        //         response => {
        //             let result = response.json();
        //             let user = result as User;
        //             return user;
        //         },
        //         error => {
        //             console.log(error);
        //             return false;
        //         }
        //     )
        //     .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}