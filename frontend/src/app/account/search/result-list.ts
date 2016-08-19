import {Component, Input} from '@angular/core';
import {FriendshipService} from 'app/user/friendship.service';
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
        this.FriendshipService.sendFriendRequest(this.user.uid_for_client)
            .then(
                () => {
                    alert('TODO Запрос отправлен');
                }
            );
    }
}
