import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Standard } from 'app/standard.model';
import { DealParams } from 'app/deal/params.model';
import { UserService } from 'app/user/auth.service';
import { GameService } from 'app/game_dispute/game/service';

@Component({
    selector: 'deal-order',
    templateUrl: './main.html',
    providers: [GameService]
})
export class DealOrder implements OnInit{
    DEFAULT_GAMERS_COUNT: Standard[] = [
        {
            id: 1,
            name: "1x1"
        },
        {
            id: 2,
            name: "2x2"
        },
        {
            id: 3,
            name: "3x3"
        },
        {
            id: 4,
            name: "4x4"
        },
        {
            id: 5,
            name: "5x5"
        }
    ];
    dealParams: DealParams = new DealParams();

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
        console.log("TODO loadTemplate");
        this.route.params.forEach((params: Params) => {
            let game_namespace = params['game_namespace'];
            console.log(game_namespace);
        });
    }

    changeGamersCount(gameOption: Standard) {
        this.dealParams.gamers_count = gameOption;
    }

    sendOrder() {
        console.log( this.dealParams );
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
