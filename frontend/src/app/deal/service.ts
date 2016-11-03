import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealService {
    private TEMP_DEAL_URL = 'temp_deal';

    constructor(private http: Http) { }

    getTempDealData(dealID: number) {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.TEMP_DEAL_URL + '/' + dealID)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result;
                }
            )
            .catch(this.handlerError);

    }
    
    // createOrderForDeal(deal_params:DealParams) {
    //     let url = this.orderUrl + "deal_order";
    //     let headers = new Headers({
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': Cookie.get('csrftoken')
    //     });
    //     let options = new RequestOptions({ headers: headers });
    //     let data: any = {
    //         left_rate: deal_params.rate.left_limit,
    //         right_rate: deal_params.rate.right_limit,
    //         games_count: 1,
    //         team_size: deal_params.gamers_count.id
    //     };
    //     //noinspection TypeScriptUnresolvedFunction
    //     return this.http.post(url, JSON.stringify(data), options)
    //         .toPromise()
    //         .then(
    //             response => {
    //                 let result = response.json();
    //                 console.log(result);
    //             }
    //         )
    //         .catch(this.handlerError);
    // }


    handlerError(error: any) {
        return Promise.reject(error.message || error);
    }
}