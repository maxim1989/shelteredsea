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
    userLoaded: boolean = false;
    is_authenticated: boolean = false;

    constructor(private UserService: UserService) {}

    ngOnInit() {
        this.getAuthUserData();
    }

    getAuthUserData() {
        this.UserService
            .getAuthUser()
            .then(
                user => {
                    this.userLoaded = true;
                    this.initAuthUser(user);
                },
                error => {
                    this.userLoaded = true;
                    this.is_authenticated = false;
                    console.log(error);
                }
            );
    }

    initAuthUser(user : User) {
        this.is_authenticated = user.is_autorized;
        if (user.is_autorized) {
            this.userTitle = user.username;
        }
    }

    goToAccount() {
        console.log('redirect in account');
    }

    routeLogIn() {
        location.href = this.URL_LOGIN;
    }

    routeLogOut() {
        location.href = this.URL_LOGOUT;
    }


}
