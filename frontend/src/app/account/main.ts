import {Component, OnInit} from '@angular/core';
import { UserService } from '../user/auth.service';

@Component({
    selector: 'account',
    directives: [],
    templateUrl: './main.html'
})
export class Account implements OnInit{

    constructor(
        private UserService: UserService
    ) {}

    ngOnInit() {
        console.log( this.UserService.getName() );
    }
}
