import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Standard } from 'app/standard.model';
import { DealParams } from 'app/deal/params.model';
import { Game } from 'app/game_dispute/game/model';
import { UserService } from 'app/user/auth.service';
import { GameService } from 'app/game_dispute/game/service';
import { DealOrderService } from 'app/deal/order/service';

@Component({
    selector: 'deal-order',
    templateUrl: './main.html',
    providers: [GameService, DealOrderService]
})
export class DealOrder implements OnInit{
    DEFAULT_GAMERS_COUNT: Standard[] = [
        {
            id: 1,
            name: "1x1",
            disabled: false
        },
        {
            id: 2,
            name: "2x2",
            disabled: true
        },
        {
            id: 3,
            name: "3x3",
            disabled: true
        },
        {
            id: 4,
            name: "4x4",
            disabled: true
        },
        {
            id: 5,
            name: "5x5",
            disabled: true
        }
    ];
    game: Game = new Game();
    dealParams: DealParams = new DealParams();

    constructor(
        private UserService: UserService,
        private GameService: GameService,
        private DealOrderService: DealOrderService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.UserService.isAutorizedPromise()
            .then( () => { this.loadTemplate() })
            .catch( () => { this.redirectToMainPage() });
    }

    loadTemplate() {
        this.route.params.forEach((params: Params) => {
            let gameNamespace = params['game_namespace'];
            this.GameService.getGameByNamespace(gameNamespace)
                .then( (game) => {
                    this.game = game;
                    this.initExistsOrders();
                });
        });
    }

    initExistsOrders() {
        this.DealOrderService.getMyOrders( this.game.namespace )
            .then( (orders) => { console.log(orders); });
    }

    changeGamersCount(gameOption: Standard) {
        if ( !gameOption.disabled ) {
            this.dealParams.gamers_count = gameOption;
        }
    }

    sendOrder() {
        console.log( this.dealParams );
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
