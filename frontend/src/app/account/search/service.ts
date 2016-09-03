import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from 'app/user/model';
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
                    return result as User[];
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}