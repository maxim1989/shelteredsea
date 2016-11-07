import {Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges} from '@angular/core';

import { Order } from 'app/deal/order/model';

import { DealService } from 'app/deal/service';
import { OrderMonitoringService } from 'app/deal/order/monitoring.service';

@Component({
    selector: 'params-by-order',
    templateUrl: './by_order.html'
})
export class DealParamsByOrder implements OnChanges{
    @Input()
    owner: string;
    @Input()
    order: Order = new Order();

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
            if (this.owner == 'alien') {
                this.title_cls = "text-danger";
                this.title = "Параметры игры на спор, выбранные соперником";
            } else {
                this.title_cls = "text-success";
                this.title = "Параметры игры на спор, выбранные вами";
            }
        }
    }

    initOrder() {
        if ( this.order && this.order.user) {
            this.user_name = this.order.user.username;
        }
    }

}
