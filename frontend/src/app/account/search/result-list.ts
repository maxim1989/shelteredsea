import {Component, Input} from '@angular/core';
import { User } from 'app/user/model';

@Component({
    selector: 'search-result-list',
    templateUrl: './result-list.html',
    providers: []
})
export class AccountSearchResultListComponent {
    @Input() user: User;
    @Input() showResult: boolean;

}
