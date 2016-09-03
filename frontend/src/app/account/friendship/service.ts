import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { Friend } from 'app/user/friend.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FriendshipService {
    private FRIENDSHIP_URL = 'personalarea/';
    private ACCEPT_REQUEST_BODY = '{"accept":true}';


    constructor(private http: Http) { }

    sendFriendRequest(ID : string) {
        let url = this.FRIENDSHIP_URL + ID;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, '{}', options)
            .toPromise()
            .then(
                response => {
                    return response.json();
                }
            )
            .catch(this.handlerError);
    }
    
    getFriendList() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.FRIENDSHIP_URL)
            .toPromise()
            .then(
                response => {
                    let result = response.json();
                    let friendList: Friend[] = result.my_friends as Friend[];
                    let applicationsToFriends: Friend[] = result.want_be_my_friend as Friend[];
                    return {
                        friendList: friendList,
                        applicationsToFriends: applicationsToFriends
                    };
                }
            )
            .catch(this.handlerError);
    }

    confirmFriendshipWith(ID : string, isAssept) {
        let url = this.FRIENDSHIP_URL + ID + '/accept';
        let requestBody = {
            accept: isAssept
        };
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, JSON.stringify(requestBody), options)
            .toPromise()
            .then(
                response => {
                    return response.json();
                }
            )
            .catch(this.handlerError);
    }

    removeFriendshipWith(ID : string) {
        let url = this.FRIENDSHIP_URL + ID + '/delete';
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, '{}', options)
            .toPromise()
            .then(
                response => {
                    return response.json();
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}