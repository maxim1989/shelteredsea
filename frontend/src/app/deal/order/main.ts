import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'app/user/auth.service';
import { GameService } from 'app/game_dispute/game/service';

@Component({
    selector: 'deal-order',
    templateUrl: './main.html',
    providers: [GameService]
})
export class DealOrder implements OnInit{

    constructor(
        private UserService: UserService,
        private GameService: GameService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.UserService.isAutorizedPromise()
            .then( () => { this.loadTemplate() })
            .catch( () => { this.redirectToMainPage() });
    }

    loadTemplate() {
        console.log("loadTemplate");
        this.route.params.forEach((params: Params) => {
            let game_namespace = params['game_namespace'];
            console.log(game_namespace);
        });
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
