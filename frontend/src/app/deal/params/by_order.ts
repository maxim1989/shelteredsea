import {Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges} from '@angular/core';

import { Order } from 'app/deal/order/model';

import { DealService } from 'app/deal/service';
import { OrderMonitoringService } from 'app/deal/order/monitoring.service';

@Component({
    selector: 'params-by-order',
    templateUrl: './by_order.html'
})
export class DealParamsByOrderComponent implements OnChanges{
    private TITLE_TEXT_ALIEN: string = "Параметры игры на спор, выбранные соперником";
    private TITLE_TEXT_MYSELF: string = "Параметры игры на спор, выбранные вами";
    @Input()
    owner: string;
    @Input()
    order: Order = new Order();

    isAlien: bool = true;
    title: string;
    title_cls: string;
    user_name: string;


    constructor(
    ) {}

    ngOnChanges() {
        this.initOwner();
        this.initOrder();
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
        }
    }

}
