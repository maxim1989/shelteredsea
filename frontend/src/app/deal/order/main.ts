import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'app/user/auth.service';

@Component({
    selector: 'deal-order',
    templateUrl: './main.html',
    providers: []
})
export class DealOrder implements OnInit{

    constructor(
        private UserService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        if ( this.UserService.isAutorized() ) {
            this.route.params.forEach((params: Params) => {
                // let id = +params['id'];
                console.log(params);
            });
        } else {
            this.redirectToMainPage();
        }
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
