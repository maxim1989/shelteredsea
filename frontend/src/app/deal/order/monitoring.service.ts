import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {Observable} from 'rxjs/Rx';

import { Order } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderMonitoringService {
    private INTERVAL: number = 5000;
    private isPaused: boolean = false;

    constructor(private http: Http) { }

    toPause() {
        this.isPaused = true;
    }

    toContinue() {
        this.isPaused = false;
    }

    runMonitoring() {
        return Observable.create((observer) => {
            //noinspection TypeScriptUnresolvedFunction
            let timer = Observable.timer(0, this.INTERVAL);
            timer.subscribe(() => {
                if ( !this.isPaused ) {
                    this.getMyOrders()
                        .then((data:Order[]) => {
                            let ordersInTempDeal: Order[] = data.filter(
                                (order: Order) => !!order.temp_deal
                            );
                            if (ordersInTempDeal.length) {
                                observer.next(ordersInTempDeal[0]);
                            }
                        });
                }
            });
        });
    }

    getMyOrders() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get("pfg/orders_for_deal")
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