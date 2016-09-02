import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Chat } from 'app/chat/model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountChatService {
    private CHAT_URL = 'chat/';

    constructor(private http: Http) { }
    
    getChatList() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.CHAT_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Chat[];
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}