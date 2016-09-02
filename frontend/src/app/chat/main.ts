import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { ChatHistoryComponent } from './history/main';
import { ChatService } from './service';
import { Chat } from 'app/chat/model';
import { Message } from 'app/chat/message.model';

@Component({
    selector: 'chat',
    templateUrl: './main.html',
    providers: [ChatService]
})
export class ChatComponent implements OnChanges {
    @Input() chat: Chat;
    @ViewChild('history')
    private historyComponent: ChatHistoryComponent;
    messageForSend: string = "";

    messages: Message[];
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
                (messages: Message[]) => {
                    this.isBusy = false;
                    this.messages = messages;
                    setTimeout( () => this.renderMessages(), 0);
                }
            )
            .catch(
                () => {
                    this.isBusy = false;
                    this.messages = null;
                }
            );
    }

    renderMessages() {
        for (let message of this.messages) {
            this.historyComponent.postNewMessage(message);
        }
    }

    sendMessage() {
        let message = this.messageForSend;
        let chatId = this.chat.chat.id;
        this.messageForSend = "";
        this.ChatService.sendMessage( chatId, message )
            .then(
                (message: Message) => {
                    this.historyComponent.postNewMessage(message);
                }
            );
    }

}
