import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { User } from './model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private AUTH_USER_URL = 'auth/authenticated_user';
    private user : User;

    constructor(
        private http: Http
    ) {}

    getAuthUser():Promise<any> {
        if ( this.user ) {
            return Promise.resolve( this.user );
        } else {
            return new Promise( (resolve, reject) => this.initAuthUserPromise(resolve, reject) );
        }
    }

    initAuthUserPromise(resolve, reject) {
        //noinspection TypeScriptUnresolvedFunction
        this.http.get(this.AUTH_USER_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    this.user = result as User;
                    resolve( this.user );
                },
                error => {
                    console.log(error);
                    reject();
                }
            )
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

    isAutorizedPromise():Promise<any> {
        if ( this.user ) {
            return (this.user.is_autorized) ? Promise.resolve() : Promise.reject(false);
        } else {
            return this.getAuthUser()
                .then(
                    (user: User) => (user.is_autorized) ? Promise.resolve() : Promise.reject(false)
                );
        }
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