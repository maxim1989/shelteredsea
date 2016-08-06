import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'app/user/model';
import { SearchUserService } from 'app/user/search.service';

@Component({
    selector: 'account-search',
    templateUrl: './main.html',
    providers: [SearchUserService]
})
export class Search {
    IDForSearch : string = "";
    inSearchState: boolean = false;
    searchedUser: User;

    constructor(
        private SearchUserService: SearchUserService
    ) {}

    searchUserByID() {
        this.inSearchState = true;
        this.SearchUserService.getUserByID( this.IDForSearch )
            .then(user => {
                this.searchedUser = user;
                this.showSearchResult()
            });
    }

    showSearchResult() {
        this.inSearchState = false;
        console.log( this.searchedUser );
    }
}
