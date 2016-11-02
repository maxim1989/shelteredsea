import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Standard } from 'app/standard.model';
import { UserService } from 'app/user/auth.service';
import { DealService } from 'app/deal/service';

@Component({
    selector: 'deal',
    templateUrl: './main.html',
    providers: [DealService]
})
export class Deal implements OnInit{

    isWaitOrder: boolean = false;
    dealId: number;

    constructor(
        private UserService: UserService,
        private DealService: DealService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.UserService.isAutorizedPromise()
            .then( () => {this.initParams()} )
            .catch( () => {this.redirectToMainPage()} );
    }

    initParams() {
        this.route.params.forEach((params: Params) => {
            this.dealId = params['deal_id'];
            this.DealService.getTempDealData(this.dealId)
                .then((data: any) => {this.loadTemplateData(data)} )
                .catch( () => {this.redirectToMainPage()} );
        });
    }

    loadTemplateData(data:any) {

    }

    private redirectToMainPage() {
        this.router.navigate(['/']);
    }

}
