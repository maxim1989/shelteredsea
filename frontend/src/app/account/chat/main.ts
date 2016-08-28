import {Component, OnInit} from '@angular/core';
import { User } from 'app/user/model';
import { Chat } from 'app/chat/model';
import { ChatService } from './service';

@Component({
    selector: 'account-chat',
    templateUrl: './main.html',
    providers: [ChatService],
})
export class AccountChatComponent implements OnInit{
    chatList: Chat[];
    selectedChat: Chat;

    constructor(
        private ChatService: ChatService
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
