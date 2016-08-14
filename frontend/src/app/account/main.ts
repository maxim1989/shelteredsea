import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user/auth.service';

@Component({
    selector: 'account',
    templateUrl: './main.html'
})
export class AccountComponent implements OnInit{

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
        
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }
}
