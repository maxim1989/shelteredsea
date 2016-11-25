import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
// import {SliderModule} from 'primeng/primeng';

import {AppComponent} from './app';
import {routing} from './routes';

import {ChatComponent} from './chat/main';
import {ChatHistoryComponent} from './chat/history/main';

import {StartPageComponent} from './start_module/main';
import {GameDisputeComponent} from './game_dispute/main';
import {DealComponent} from './deal/main';
import {DealParamsByOrderComponent} from './deal/params/by_order';
import {DealOrderComponent} from './deal/order/main';
import {AccountComponent} from './account/main';
import {AccountChatComponent} from './account/chat/main';
import {AccountCardComponent} from './account/card/main';
import {AccountSearchComponent} from './account/search/main';
import {AccountSearchResultListComponent} from './account/search/result-list';
import {AccountFriendshipComponent} from './account/friendship/main';
import {AccountStatisticComponent} from './account/statistic/main';

import {TimePipe} from './pipes/time';
import {RatePipe} from './pipes/rate';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,

        MaterialModule.forRoot()
        // SliderModule
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        GameDisputeComponent,

        DealComponent,
        DealParamsByOrderComponent,
        DealOrderComponent,

        ChatComponent, ChatHistoryComponent,

        AccountComponent,
        AccountChatComponent,
        AccountCardComponent,
        AccountSearchComponent, AccountSearchResultListComponent,
        AccountFriendshipComponent,
        AccountStatisticComponent,

        TimePipe,
        RatePipe
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
