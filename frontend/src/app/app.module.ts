import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import {AppComponent} from './app';
import {routing} from './routes';

import {ChatComponent} from './chat/main';
import {ChatHistoryComponent} from './chat/history/main';

import {StartPageComponent} from './start_module/main';
import {GameDispute} from './game_dispute/main';
import {DealOrder} from './deal/order/main';
import {AccountComponent} from './account/main';
import {AccountChatComponent} from './account/chat/main';
import {AccountCardComponent} from './account/card/main';
import {AccountSearchComponent} from './account/search/main';
import {AccountSearchResultListComponent} from './account/search/result-list';
import {AccountFriendshipComponent} from './account/friendship/main';
import {AccountStatisticComponent} from './account/statistic/main';

import {TimePipe} from './pipes/time';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,

        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        GameDispute,
        DealOrder,

        ChatComponent, ChatHistoryComponent,

        AccountComponent,
        AccountChatComponent,
        AccountCardComponent,
        AccountSearchComponent, AccountSearchResultListComponent,
        AccountFriendshipComponent,
        AccountStatisticComponent,

        TimePipe
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
