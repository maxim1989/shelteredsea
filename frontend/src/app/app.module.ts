import { NgModule, NgModuleMetadataType } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdCardModule } from '@angular2-material/card';

import {AppComponent} from './app';
import {routing} from './routes';

import {StartPageComponent} from './start_module/main';
import {GameDispute} from './game_dispute_module/main';
import {AccountComponent} from './account/main';
import {AccountCardComponent} from './account/card/main';
import {AccountSearchComponent} from './account/search/main';
import {AccountSearchResultListComponent} from './account/search/result-list';
import {AccountFriendshipComponent} from './account/friendship/main';


@NgModule(<NgModuleMetadataType>{
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        MdButtonModule,
        MdTabsModule,
        MdCardModule
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        GameDispute,
        AccountComponent,
        AccountCardComponent,
        AccountSearchComponent,
        AccountSearchResultListComponent,
        AccountFriendshipComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
