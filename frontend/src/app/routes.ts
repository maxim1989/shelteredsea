import {Routes, RouterModule} from '@angular/router';

import { StartPageComponent } from './start_module/main';
import { GameDispute } from './game_dispute/main';
import { Deal } from './deal/main';
import { DealOrder } from './deal/order/main';
import { AccountComponent } from './account/main';

const appRoutes: Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'pfg',
        component: GameDispute
    },
    {
        path: 'pfg/:game_namespace/dispute',
        component: DealOrder
    },
    {
        path: 'pfg/deal/:deal_id',
        component: Deal
    },
    {
        path: 'account',
        component: AccountComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
