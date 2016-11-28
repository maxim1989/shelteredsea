import {Component, Input, Output, OnChanges, OnDestroy, SimpleChanges, EventEmitter} from '@angular/core';

import { Order } from 'app/deal/order/model';

import { DealService } from 'app/deal/service';
import { DealParamsService } from 'app/deal/params/service';

@Component({
    selector: 'params-by-order',
    templateUrl: './by_order.html',
    providers: [DealParamsService]
})
export class DealParamsByOrderComponent implements OnChanges, OnDestroy{
    private TITLE_TEXT_ALIEN: string = "Параметры игры на спор, выбранные соперником";
    private TITLE_TEXT_MYSELF: string = "Параметры игры на спор, выбранные вами";
    @Input()
    owner: string;
    @Input()
    order: Order = new Order();
    @Output()
    checkActive = new EventEmitter<boolean>();

    private monitoring;
    isAlien: boolean = true;
    title: string;
    title_cls: string;
    user_name: string;


    constructor(
        private DealParamsService: DealParamsService
    ) {}

    ngOnChanges() {
        this.initOwner();
        this.initOrder();
    }

    ngOnDestroy() {
        this.DealParamsService.clearMonitoring();
    }

    initOwner() {
        if ( this.owner ) {
            this.isAlien = this.owner == 'alien';
            if ( this.isAlien ) {
                this.title_cls = "text-danger";
                this.title = this.TITLE_TEXT_ALIEN;
            } else {
                this.title_cls = "text-success";
                this.title = this.TITLE_TEXT_MYSELF;
            }
        }
    }

    initOrder() {
        if ( this.order && this.order.user) {
            this.user_name = this.order.user.username;
            this.initParamsMonitoring(this.order.id);
        }
    }

    initParamsMonitoring(orderID:number) {
        this.monitoring = this.DealParamsService.runMonitoring(orderID);
        this.monitoring.subscribe((order:Order) => {
            this.checkActive.emit(order.in_negotiations);
            if (this.isAlien) {
                this.order.rate = order.rate;
                this.order.games_count = order.games_count;
            } else {
                this.DealParamsService.setOrderParam(this.order);
            }
        })
    }

}
