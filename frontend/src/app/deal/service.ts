import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/toPromise';

import { TempDeal } from 'app/deal/temp_deal.model';

@Injectable()
export class DealService {
    private TEMP_DEAL_URL = 'pfg/temp_deals';

    constructor(private http: Http) { }

    getTempDealData(dealID: number) {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.TEMP_DEAL_URL + '/' + dealID)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as TempDeal;
                }
            )
            .catch(this.handlerError);
    }

    toNextDeal(dealID: number){
        let url = 'pfg/next_' + dealID;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, JSON.stringify({}), options)
            .toPromise()
            .catch(this.handlerError);
    }

    startDeal(orderID:number) {
        let url = 'pfg/start_dispute_' + orderID;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        //TODO после отправки возвращается Id сделки.
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, JSON.stringify({}), options)
            .toPromise()
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        return Promise.reject(error.message || error);
    }
}