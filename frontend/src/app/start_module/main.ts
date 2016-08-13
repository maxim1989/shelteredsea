import {
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate } from '@angular/core';

@Component({
    selector: 'start_page',
    providers: [],
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
                style({transform: 'translateX(-200%)'}),
                animate('.3s ease-in')
            ]),
            transition('void => in-from-right', [
                style({transform: 'translateX(200%)'}),
                animate('.3s ease-in')
            ])
        ])
    ]
})
export class StartPageComponent implements OnInit{
    leftLinkState : string = "";
    rightLinkState : string = "";
    ngOnInit() {
        this.leftLinkState = 'in-from-left';
        this.rightLinkState = 'in-from-right';
    }
}
