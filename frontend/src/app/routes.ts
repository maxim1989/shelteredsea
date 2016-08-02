import { provideRouter, RouterConfig } from '@angular/router';

import {StartPage} from './start_module/main';
import {GameDispute} from './game_dispute_module/main';
import {Account} from './account/main';

const routes: RouterConfig = [
    {
        path: '',
        component: StartPage
    },
    {
        path: 'pfg',
        component: GameDispute
    },
    {
        path: 'account',
        component: Account
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
