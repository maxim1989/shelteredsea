import {Component, OnInit} from '@angular/core';
import { Chat } from 'app/chat/model';
import { AccountChatService } from './service';

@Component({
    selector: 'account-chat',
    templateUrl: './main.html',
    providers: [AccountChatService],
})
export class AccountChatComponent implements OnInit{
    chatList: Chat[];
    selectedChat: Chat;

    constructor(
        private ChatService: AccountChatService
    ) {}

    ngOnInit() {
        this.loadChatList();
    }

    loadChatList() {
        this.ChatService.getChatList()
            .then(
                (chatList: Chat[]) => {
                    this.chatList = chatList;
                }
            );
    }

    chooseChat(chat: Chat) {
        this.selectedChat = chat;
    }

}
