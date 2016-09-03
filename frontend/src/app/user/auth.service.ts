import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private AUTH_USER_URL = 'auth/authenticated_user';
    private user : User;

    constructor(private http: Http) { }

    initAuthUser() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.AUTH_USER_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    this.user = result as User;
                    return true;
                },
                error => {
                    console.log(error);
                    return false;
                }
            )
            .catch(this.handlerError);
    }

    getUser() {
        return this.user;
    }

    getName() {
        return (this.user) ? this.user.username : "";
    }

    isAutorized() {
        return (this.user) ? this.user.is_autorized : false;
    }

    getUid() {
        return (this.user) ? this.user.uid_for_client.name : "";
    }

    getDisputeName() {
        return (this.user) ? this.user.dispute_name.name : "";
    }

    getStatisticName() {
        return (this.user) ? this.user.statistic_name.name : "";
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}