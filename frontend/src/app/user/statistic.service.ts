import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatisticService {
    private URL = 'personalarea/statistic';

    constructor(private http: Http) { }
    
    getStatistic() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.URL)
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