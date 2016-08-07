import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user/auth.service';
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
    uid : string;
    userLoaded: boolean = false;
    is_authenticated: boolean = false;

    constructor(private UserService: UserService) {}

    ngOnInit() {
        this.UserService.initAuthUser()
            .then(
                isInit => {
                    this.userLoaded = isInit;
                    this.initAuthUser();
                }
            );
    }

    initAuthUser() {
        this.is_authenticated = this.UserService.isAutorized();
        this.userTitle = this.UserService.getName();
        this.uid = this.UserService.getUid();
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
