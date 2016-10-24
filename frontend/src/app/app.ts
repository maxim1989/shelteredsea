import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user/auth.service';
import { User } from 'app/user/model';

@Component({
    selector: 'app',
    providers: [UserService],
    templateUrl: './app.html',
})
export class AppComponent implements OnInit{
    protected URL_LOGIN: string = "/login/steam/";
    protected URL_LOGOUT: string = "/auth/logout/";

    userTitle : string;
    uid : string;
    userLoaded: boolean = false;
    is_authenticated: boolean = false;

    constructor(
        private UserService: UserService
    ) {}

    ngOnInit() {
        this.UserService.getAuthUser()
            .then( (user: User) => {
                    this.userLoaded = true;
                    this.initAuthUser( user );
            })
            .catch( () => {
                this.userLoaded = false;
            });
    }

    initAuthUser(user: User) {
        this.is_authenticated = user.is_autorized;
        if ( user.is_autorized ) {
            this.userTitle = user.username;
            this.uid = user.uid_for_client.name;
        }
    }
    
    routeLogIn() {
        location.href = this.URL_LOGIN;
    }

    routeLogOut() {
        location.href = this.URL_LOGOUT;
    }

}
