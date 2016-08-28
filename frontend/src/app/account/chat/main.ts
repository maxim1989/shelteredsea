import {Component, OnInit} from '@angular/core';
import { User } from 'app/user/model';
import { ChatService } from './service';

@Component({
    selector: 'account-chat',
    templateUrl: './main.html',
    providers: [ChatService],
})
export class AccountChatComponent implements OnInit{

    constructor(
        private ChatService: ChatService
    ) {}

    ngOnInit() {
        this.loadChatList();
    }

    loadChatList() {
        this.ChatService.getChatList();
            // .then(
            //     (data: any) => {
            //         this.friendList = data.friendList;
            //         this.applicationsToFriends = data.applicationsToFriends;
            //     }
            // );
    }
}
