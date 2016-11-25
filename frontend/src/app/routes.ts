import {Routes, RouterModule} from '@angular/router';

import { StartPageComponent } from './start_module/main';
import { GameDisputeComponent } from './game_dispute/main';
import { DealComponent } from './deal/main';
import { DealOrderComponent } from './deal/order/main';
import { AccountComponent } from './account/main';

const appRoutes: Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'pfg',
        component: GameDisputeComponent
    },
    {
        path: 'pfg/:game_namespace/dispute',
        component: DealOrderComponent
    },
    {
        path: 'pfg/deal/:deal_id',
        component: DealComponent
    },
    {
        path: 'account',
        component: AccountComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
