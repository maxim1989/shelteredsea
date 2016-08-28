import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { User } from 'app/user/model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {
    private CHAT_URL = 'chat/';

    constructor(private http: Http) { }

    // sendFriendRequest(ID : string) {
    //     let url = this.FRIENDSHIP_URL + ID;
    //     let headers = new Headers({
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': Cookie.get('csrftoken')
    //     });
    //     let options = new RequestOptions({ headers: headers });
    //     //noinspection TypeScriptUnresolvedFunction
    //     return this.http.post(url, '{}', options)
    //         .toPromise()
    //         .then(
    //             response => {
    //                 let result = response.json();
    //                 console.log(result);
    //                 // return result as User[];
    //             },
    //             error => {
    //                 console.log(error);
    //                 return [];
    //             }
    //         )
    //         .catch(this.handlerError);
    // }
    
    getChatList() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.CHAT_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    console.log( result );
                    // let friendList: User[] = result.my_friends as User[];
                    // let applicationsToFriends: User[] = result.want_be_their_friend as User[];
                    // return {
                    //     friendList: friendList,
                    //     applicationsToFriends: applicationsToFriends
                    // };
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}