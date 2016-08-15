import {Component, OnInit} from '@angular/core';
import { User } from 'app/user/model';
import { UserService } from 'app/user/auth.service';

@Component({
    selector: 'account-card',
    templateUrl: './main.html',
    providers: [],
})
export class AccountCardComponent implements OnInit{
    disputeName: string;

    constructor(
        private UserService: UserService
    ) {}

    ngOnInit() {
        this.disputeName = this.UserService.getChatName();
    }
}
