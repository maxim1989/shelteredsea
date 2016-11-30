import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Order } from 'app/account/deals/order.model'

@Injectable()
export class AccountDealsService {
    private DEALS_URL = 'pfg/account_deals';

    constructor(private http: Http) { }
    
    getDealList(): Promise<Order[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.DEALS_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Order[];
                    
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}