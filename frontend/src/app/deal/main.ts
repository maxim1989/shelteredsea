import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Standard } from 'app/standard.model';
import { User } from 'app/user/model';
import { Chat } from 'app/chat/model';
import { TempDeal } from 'app/deal/temp_deal.model';
import { Order } from 'app/deal/order/model';

import { UserService } from 'app/user/auth.service';
import { DealService } from 'app/deal/service';
import { OrderMonitoringService } from 'app/deal/order/monitoring.service';

@Component({
    selector: 'deal',
    templateUrl: './main.html',
    providers: [DealService]
})
export class DealComponent implements OnInit, OnDestroy{
    user: User;
    dealId: number;
    chat: Chat;
    myselfOrder: Order = new Order();
    alienOrder: Order = new Order();

    constructor(
        private UserService: UserService,
        private DealService: DealService,
        private router: Router,
        private route: ActivatedRoute,
        private OrderMonitoringService: OrderMonitoringService
    ) {}

    ngOnInit() {
        this.UserService.getAuthUser()
            .then( (user:User) => {
                this.user = user;
                this.initParams()
            })
            .catch( () => {this.redirectToMainPage()} );
    }

    ngOnDestroy() {
        this.OrderMonitoringService.toContinue();
    }

    initParams() {
        this.route.params.forEach((params: Params) => {
            this.dealId = params['deal_id'];
            this.DealService.getTempDealData(this.dealId)
                .then((data: TempDeal) => {this.loadTemplateData(data)} )
                .catch( () => {this.redirectToMainPage()} );
        });
    }

    loadTemplateData(data:TempDeal) {
        this.chat = new Chat();
        this.chat.chat = data.chat;
        
        data.orders.forEach((order:Order) => {
            if ( order.user.id == this.user.id ) {
                this.myselfOrder = order;
            } else {
                this.alienOrder = order;
            }
        });
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
