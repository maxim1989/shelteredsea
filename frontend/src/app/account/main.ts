import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'app/user/model';
import { UserService } from 'app/user/auth.service';

@Component({
    selector: 'account',
    templateUrl: './main.html'
})
export class AccountComponent implements OnInit{
    user: User;

    constructor(
        private UserService: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        if ( this.UserService.isAutorized() ) {
            this.initAuthUser();
        } else {
            this.redirectToMainPage();
        }
    }

    initAuthUser() {
        this.user = this.UserService.getUser();
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }
}
