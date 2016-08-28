import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ChatService } from './service';
import { Chat } from 'app/chat/model';
import { Message } from 'app/chat/message.model';

@Component({
    selector: 'chat-message-list',
    templateUrl: './message-list.html',
    providers: [ChatService]
})
export class AccountChatMessageListComponent implements OnChanges {
    @Input() chat: Chat;
    isBusy: boolean;

    constructor(
        private ChatService: ChatService
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        let chat = changes['chat'].currentValue;
        if ( chat ) {
            this.loadChat( chat );
        }
    }

    loadChat(chat: Chat) {
        this.isBusy = true;
        let chatId = chat.chat.id;
        this.ChatService.getChat( chatId )
            .then(
                () => {
                    this.isBusy = false;
                }
            );
    }

}
