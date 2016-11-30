import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Rx';

import { Standard } from 'app/standard.model';
import { User } from 'app/user/model';
import { Game } from 'app/game_dispute/game/model';

import { UserService } from 'app/user/auth.service';
import { GameService } from 'app/game_dispute/game/service';
import { OrderForDealService } from 'app/deal/order/service';
import {Order} from "./model";

@Component({
    selector: 'deal-order',
    templateUrl: './main.html',
    providers: [GameService, OrderForDealService]
})
export class DealOrderComponent implements OnInit{
    DEFAULT_TEAM_SIZE: Standard[] = [
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
    user: User;
    order: Order = new Order();
    isWaitOrder: boolean = false;
    game: Game = new Game();
    timerFromFa: number = 0;
    timer: any;
    timerSubscription: any;

    constructor(
        private UserService: UserService,
        private GameService: GameService,
        private OrderForDealService: OrderForDealService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.UserService.getAuthUser()
            .then( (user: User) => {
                this.user = user;
                this.initParams();
            })
            .catch( () => { this.redirectToMainPage() });
    }

    initParams() {
        this.route.params.forEach((params: Params) => {
            let gameNamespace = params['game_namespace'];
            this.GameService.getGameByNamespace(gameNamespace)
                .then( (game: Game) => {
                    this.game = game;
                    this.order.game = game;
                    this.initExistsOrders();
                });
        });
    }

    initExistsOrders() {
        this.OrderForDealService.getMyOrders()
            .then( (orders) => {
                if (orders.length) {
                    let orderOfGame: Order[] = orders.filter(
                        (order: Order) => order.game.id == this.game.id
                    );
                    if (orderOfGame.length) {
                        this.loadExistOrderData(orderOfGame[0]);
                    }
                }
            });
    }

    loadExistOrderData(order: Order) {
        this.order = order;
        this.isWaitOrder = true;
        if (order.is_active) {
            this.runTimer( Math.round(order.modification_in_seconds) );
        }
    }

    changeGamersCount(gameOption: Standard) {
        if ( !gameOption.disabled ) {
            this.order.team_size = gameOption.id;
        }
    }

    checkRateLimits() {
        if ( this.order.rate_right > Math.floor(this.user.balance.balance / 100) ) {
            this.order.rate_right = Math.floor(this.user.balance.balance / 100);
        }
        if ( this.order.rate_left > this.order.rate_right ) {
            this.order.rate_left = this.order.rate_right;
        }
    }

    sendOrder() {
        this.OrderForDealService.createOrderForDeal(this.order, this.game)
            .then( () => {
                this.initExistsOrders();
                this.afterSendOrder();
            });
    }

    cancelOrder() {
        this.clearTimer();
        this.OrderForDealService.cancelOrder(this.order)
            .then( () => {
                this.initExistsOrders();
                this.isWaitOrder = false;
            });
    }

    afterSendOrder() {
        this.runTimer();
        this.isWaitOrder = true;
    }

    runTimer(begin_seconds: number = 0) {
        //noinspection TypeScriptUnresolvedFunction
        this.clearTimer();
        this.timerFromFa = begin_seconds;
        this.timer = setInterval(() => this.timerFromFa += 1, 1000)
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timerFromFa = 0;
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
