import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'start_page',
    pipes: [],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './main.html',
    animations: [
        trigger('pageState', [
            state('in-from-left', style({
                transform: 'translateX(0)'
            })),
            state('in-from-right', style({
                transform: 'translateX(0)'
            })),
            transition('void => in-from-left', [
                style({transform: 'translateX(-100%)'}),
                animate(500)
            ]),
            transition('void => in-from-right', [
                style({transform: 'translateX(100%)'}),
                animate(500)
            ])
        ])
    ]
})
export class StartPage{
}
