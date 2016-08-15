import {Component, OnInit} from '@angular/core';
import { User } from 'app/user/model';
import { FriendshipService } from 'app/user/friendship.service';

@Component({
    selector: 'account-friendship',
    templateUrl: './main.html',
    providers: [FriendshipService],
})
export class AccountFriendshipComponent {
    friendList: User[];
    applicationsToFriends: User[];

    constructor(
        private FriendshipService: FriendshipService
    ) {}

    ngOnInit() {
        this.FriendshipService.getFriendList()
            .then(
                (data: any) => {
                    this.friendList = data.friendList;
                    this.applicationsToFriends = data.applicationsToFriends;
                }
            );
    }
}
