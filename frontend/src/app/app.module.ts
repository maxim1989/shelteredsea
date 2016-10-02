import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdTabsModule } from '@angular2-material/tabs';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';

import {AppComponent} from './app';
import {routing} from './routes';

import {ChatComponent} from './chat/main';
import {ChatHistoryComponent} from './chat/history/main';

import {StartPageComponent} from './start_module/main';
import {GameDispute} from './game_dispute_module/main';
import {AccountComponent} from './account/main';
import {AccountChatComponent} from './account/chat/main';
import {AccountCardComponent} from './account/card/main';
import {AccountSearchComponent} from './account/search/main';
import {AccountSearchResultListComponent} from './account/search/result-list';
import {AccountFriendshipComponent} from './account/friendship/main';
import {AccountStatisticComponent} from './account/statistic/main';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,

        MdTabsModule,
        MdCardModule,
        MdProgressBarModule,
        MdProgressCircleModule
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        GameDispute,

        ChatComponent, ChatHistoryComponent,

        AccountComponent,
        AccountChatComponent,
        AccountCardComponent,
        AccountSearchComponent, AccountSearchResultListComponent,
        AccountFriendshipComponent,
        AccountStatisticComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
