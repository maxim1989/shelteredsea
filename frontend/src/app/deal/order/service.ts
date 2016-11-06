import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Order } from './model';
import { Game } from 'app/game_dispute/game/model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderForDealService {
    private ORDER_BASE_URL = 'pfg/';

    constructor(private http: Http) { }

    getMyOrders() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.ORDER_BASE_URL + "orders_for_deal")
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Order[];
                }
            )
            .catch(this.handlerError);
    }
    
    createOrderForDeal(order:Order, game: Game) {
        let url = this.ORDER_BASE_URL + "orders_for_deal";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        let data: any = {
            namespace: game.namespace,
            rate_left: order.rate_left,
            rate_right: order.rate_right,
            games_count: 1,
            team_size: order.team_size
        };
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, JSON.stringify(data), options)
            .toPromise()
            .catch(this.handlerError);
    }

    cancelOrder(order: Order) {
        let url = this.ORDER_BASE_URL + "orders_for_deal/" + order.id;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.delete(url, options)
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