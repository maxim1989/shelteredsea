import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {Observable} from 'rxjs/Rx';

import { Order } from 'app/deal/order/model';
import { TempDeal } from 'app/deal/temp_deal.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealParamsService{
    private URL_PREFIX = 'pfg/conditions_opponent_';
    private INTERVAL:number = 5000;
    private orderID:number;
    private monitoringSubscription:any;

    constructor(private http: Http) {}

    runMonitoring(orderID:number){
        this.orderID = orderID;
        this.clearMonitoring();

        return Observable.create((observer) => {
            //noinspection TypeScriptUnresolvedFunction
            let timer = Observable.timer(0, this.INTERVAL);
            this.monitoringSubscription = timer.subscribe(() => {
                this.getOrderParam()
                    .then( (order:Order) => observer.next(order));
            });
        });
    }

    clearMonitoring() {
        if ( this.monitoringSubscription ) {
            this.monitoringSubscription.unsubscribe();
        }
    }

    getOrderParam() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.URL_PREFIX + this.orderID)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Order;
                }
            )
            .catch(this.handlerError);
    }

    setOrderParam(order:Order) {
        let url = "pfg/orders_for_deal/" + this.orderID;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        let data: any = {
            rate: order.rate,
            games_count: order.games_count,
        };
        //noinspection TypeScriptUnresolvedFunction
        return this.http.put(url, JSON.stringify(data), options)
            .toPromise()
            .catch(this.handlerError);
    }


    handlerError(error: any) {
        return Promise.reject(error.message || error);
    }
}