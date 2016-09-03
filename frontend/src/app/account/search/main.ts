import {Component} from '@angular/core';
import { User } from 'app/user/model';
import { SearchUserService } from './service';

@Component({
    selector: 'account-search',
    templateUrl: './main.html',
    providers: [SearchUserService],
    // directives: [ResultListComponent]
})
export class AccountSearchComponent {
    IDForSearch : string = "";
    inSearchState: boolean = false;
    foundUser : User;
    showResultState : boolean = false;

    constructor(
        private SearchUserService: SearchUserService
    ) {}

    searchUserByID() {
        this.inSearchState = true;
        this.SearchUserService.getUserByID( this.IDForSearch )
            .then((found_list : User[]) => {
                this.showSearchResult(found_list);
            });
    }

    showSearchResult(foundList: User[]) {
        this.inSearchState = false;
        this.showResultState = true;
        if ( foundList.length ) {
            this.foundUser = foundList[0];
        } else {
            this.foundUser = null;
        }
    }
}
