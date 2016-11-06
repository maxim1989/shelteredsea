import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Standard } from 'app/standard.model';
import { Chat } from 'app/chat/model';
import { TempDeal } from 'app/deal/temp_deal.model';

import { UserService } from 'app/user/auth.service';
import { DealService } from 'app/deal/service';
import { OrderMonitoringService } from 'app/deal/order/monitoring.service';

@Component({
    selector: 'deal',
    templateUrl: './main.html',
    providers: [DealService]
})
export class Deal implements OnInit, OnDestroy{

    dealId: number;
    chat: Chat;

    constructor(
        private UserService: UserService,
        private DealService: DealService,
        private router: Router,
        private route: ActivatedRoute,
        private OrderMonitoringService: OrderMonitoringService
    ) {}

    ngOnInit() {
        this.UserService.isAutorizedPromise()
            .then( () => {this.initParams()} )
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
        console.log(this.chat);
    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
