import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user/service';
import { User } from './user/model';

@Component({
    selector: 'app',
    pipes: [],
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app.html',
})
export class App implements OnInit{
    protected URL_LOGIN: string = "/login/steam/";
    protected URL_LOGOUT: string = "/auth/logout/";

    user : User;
    userTitle : string;
    is_authenticated: boolean = false;

    constructor(private UserService: UserService) {}

    ngOnInit() {
        this.getAuthUserData();
    }

    getAuthUserData() {
        this.UserService
            .getAuthUser()
            .then(user => this.initAuthUser(user))
            .catch(() => this.is_authenticated = false);
    }

    initAuthUser( user : User) {
        this.is_authenticated = user.is_auth;
        if (user.is_auth) {
            this.userTitle = user.name;
        }
    }

    goToAccount() {
        console.log('redirect in account');
    }

    routerLogIn() {
        location.href = this.URL_LOGIN;
    }

    routelogOut() {
        location.href = this.URL_LOGOUT;
    }


}
