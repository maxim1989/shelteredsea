import {Component, Input} from '@angular/core';
import {FriendshipService} from '../friendship/service';
import { User } from 'app/user/model';

@Component({
    selector: 'search-result-list',
    templateUrl: './result-list.html',
    providers: [FriendshipService]
})
export class AccountSearchResultListComponent {
    @Input() user: User;
    @Input() showResult: boolean;

    constructor(
        private FriendshipService: FriendshipService
    ) {}

    addFriend() {
        this.user.is_busy = true;
        this.FriendshipService.sendFriendRequest(this.user.uid_for_client.name)
            .then(
                () => {
                    this.successAddFriend();
                }
            );
    }

    successAddFriend() {
        this.user.is_busy = false;
        this.user.is_friend = true;
    }
}
