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
        this.DealsService.getDealList()
            .then(
                (orderList: Order[]) => {
                    this.orderList = orderList;
                }
            );
    }

}
