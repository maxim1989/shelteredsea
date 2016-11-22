import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountDealsService {
    private DEALS_URL = 'pfg/account_deals';

    constructor(private http: Http) { }
    
    getDealList() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.DEALS_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result;
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}