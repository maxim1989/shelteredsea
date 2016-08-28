import {Component, OnInit} from '@angular/core';
import { User } from 'app/user/model';
import { FriendshipService } from './service';

@Component({
    selector: 'account-friendship',
    templateUrl: './main.html',
    providers: [FriendshipService],
})
export class AccountFriendshipComponent implements OnInit{
    friendList: User[];
    applicationsToFriends: User[];

    constructor(
        private FriendshipService: FriendshipService
    ) {}

    ngOnInit() {
        this.loadFriendList();
    }

    loadFriendList() {
        this.FriendshipService.getFriendList()
            .then(
                (data: any) => {
                    this.friendList = data.friendList;
                    this.applicationsToFriends = data.applicationsToFriends;
                }
            );
    }

    addFriend(user: User) {
        console.log(user);
        alert('TODO');
        // this.FriendshipService.acceptFriendshipWith(uid);
    }
    deleteFriend(user: User) {
        alert('TODO');
        // this.FriendshipService.acceptFriendshipWith(uid);
    }
}
