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
    balance: string = "2 340";
    isFailed: boolean = false;

    constructor(
        private UserService: UserService
    ) {}

    ngOnInit() {
        this.UserService.getAuthUser()
            .then((user:User) => this.user = user)
            .catch(() => this.isFailed = true);
    }
}
