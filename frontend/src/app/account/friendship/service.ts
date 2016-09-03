import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { User } from 'app/user/model';
import { Friend } from 'app/user/friend.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FriendshipService {
    private FRIENDSHIP_URL = 'personalarea/';

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
                    let result = response.json();
                    console.log(result);
                    // return result as User[];
                },
                error => {
                    console.log(error);
                    return [];
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

    acceptFriendshipWith(ID : string) {
        let url = this.FRIENDSHIP_URL + ID + '/accept';
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
                    let result = response.json();
                    console.log(result);
                    // return result as User[];
                }
            )
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}