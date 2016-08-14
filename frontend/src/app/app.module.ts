import { NgModule, NgModuleMetadataType } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdTabsModule } from '@angular2-material/tabs';

import {AppComponent} from './app';
import {routing} from './routes';

import {StartPageComponent} from './start_module/main';
import {GameDispute} from './game_dispute_module/main';
import {AccountComponent} from './account/main';
import {AccountSearchComponent} from './account/search/main';
import {AccountSearchResultListComponent} from './account/search/result-list';


@NgModule(<NgModuleMetadataType>{
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        MdButtonModule,
        MdTabsModule
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        GameDispute,
        AccountComponent,
        AccountSearchComponent,
        AccountSearchResultListComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
