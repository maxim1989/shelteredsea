import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Game } from './model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {
    private GAME_URL = 'pfg';

    constructor(private http: Http) { }

    getGames() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.GAME_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Game[];
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}