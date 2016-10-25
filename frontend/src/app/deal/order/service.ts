import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Order } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealOrderService {
    private ORDER_URL = 'pfg/';

    constructor(private http: Http) { }

    getMyOrders(game_name:string) {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.ORDER_URL + game_name + "/deal_order_myself")
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
        return Promise.reject(error.message || error);
    }
}