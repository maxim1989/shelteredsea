import {Component, OnInit} from '@angular/core';
import { User } from 'app/user/model';
import { UserService } from 'app/user/auth.service';

@Component({
    selector: 'account-card',
    templateUrl: './main.html',
    providers: [],
})
export class AccountCardComponent implements OnInit{
    user: User;

    constructor(
        private UserService: UserService
    ) {}

    ngOnInit() {
        this.user = this.UserService.getUser();
    }
}
