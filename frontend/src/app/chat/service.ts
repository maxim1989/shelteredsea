import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Message } from 'app/chat/message.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {
    private CHAT_URL = 'chat/';

    constructor(private http: Http) { }

    sendMessage(chatID : number, textMessage: string) {
        let url = this.CHAT_URL + chatID;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        let data: any = {};
        data.message = textMessage;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, JSON.stringify(data), options)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Message;
                }
            )
            .catch(this.handlerError);
    }

    getChat(chatId: number) {
        let url = this.CHAT_URL + chatId;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get( url )
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Message[];
                }
            )
            .catch(this.handlerError);
    }

    getNewMessages(chatId: number) {
        let url = this.CHAT_URL + chatId + '/new';
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get( url )
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    return result as Message[];
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}