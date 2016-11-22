import { Component, OnInit } from '@angular/core';
import { AccountDealsService } from './service';

import { Order } from 'app/account/deals/order.model'


@Component({
    selector: 'account-deals',
    templateUrl: './main.html',
    providers: [AccountDealsService]
})
export class AccountDealsComponent implements OnInit{
    orderList: Order[];

    constructor(
        private DealsService: AccountDealsService
    ) {}

    ngOnInit() {
        this.loadDealsList();
    }

    loadDealsList() {
        console.log('-----------------');
        console.log(this.orderList);
        let res: any = this.DealsService.getDealList()
            .then(orderList => this.orderList = orderList);
        console.log('-----------------');
        console.log(this.orderList);
        console.log(res);
    }

}
