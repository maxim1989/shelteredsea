import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Order } from './model';
import { DealParams } from 'app/deal/params.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealOrderService {
    private ORDER_BASE_URL = 'pfg/';
    private orderUrl: string;

    constructor(private http: Http) { }

    setGameName(game_name:string) {
        this.orderUrl = this.ORDER_BASE_URL + game_name + "/";
    }

    getMyOrders() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.orderUrl + "deal_order_myself")
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Order[];
                }
            )
            .catch(this.handlerError);
    }
    
    createOrderForDeal(deal_params:DealParams) {
        let url = this.orderUrl + "deal_order";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        let data: any = {
            left_rate: deal_params.rate.left_limit,
            right_rate: deal_params.rate.right_limit,
            games_count: 1,
            team_size: deal_params.gamers_count.id
        };
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, JSON.stringify(data), options)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    console.log(result);
                }
            )
            .catch(this.handlerError);
    }


    handlerError(error: any) {
        return Promise.reject(error.message || error);
    }
}