import {Component, OnInit, Input} from '@angular/core';
import { User } from 'app/user/model';
import { StatisticService } from './service';

@Component({
    selector: 'account-statistic',
    templateUrl: './main.html',
    providers: [StatisticService],
})
export class AccountStatisticComponent implements OnInit{
    @Input() user: User;
    statisticUserList: User[];

    constructor(
        private StatisticService: StatisticService
    ) {}

    ngOnInit() {
        this.StatisticService.getStatistic()
            .then(
                (users: User[]) => {
                    this.statisticUserList = users;
                }
            );
    }
}
