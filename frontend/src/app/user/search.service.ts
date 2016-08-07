import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchUserService {
    private SEARCH_USER_URL = 'personalarea/';

    constructor(private http: Http) { }

    getUserByID(ID : string) {
        let url = this.SEARCH_USER_URL + ID;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(url)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    if ( result.length == null ) {
                        let user = result as User;
                        return [user];
                    } else {
                        return [];
                    }
                },
                error => {
                    return [];
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}