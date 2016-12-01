import { Component, OnInit } from '@angular/core';
import { AccountDealsService } from './service';

import { Order } from 'app/deal/order/model';

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

    public getDealState(order:Order) {
        return (order.is_active) ? "Активная сделка" : "Сделка завершена";
    }

    public getDealStatus(order:Order) {
        if (order.deal && !order.is_active && !order.deal.is_active) {
            if (order.deal.is_failed) {
                return "Ошибка в определении победителя";
            } else {
                return (order.is_winner) ? "Победа" : "Поражение";
            }
        } else {
            return "-";
        }
        
    }

}
