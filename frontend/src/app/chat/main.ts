import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import { ChatHistoryComponent } from './history/main';
import { ChatService } from './service';
import { Chat } from 'app/chat/model';
import { Message } from 'app/chat/message.model';

@Component({
    selector: 'chat',
    templateUrl: './main.html',
    providers: [ChatService]
})
export class ChatComponent implements OnChanges, OnDestroy {
    @Input()
    chat: Chat;
    @ViewChild('history')
    private historyComponent: ChatHistoryComponent;
    private CHAT_WATCHER_PERIOD: number = 5000;

    messageForSend: string = "";
    messages: Message[];
    isBusy: boolean;
    chatWatcherId: any = 0;

    constructor(
        private ChatService: ChatService
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        let chat = changes['chat'].currentValue;
        if ( chat ) {
            this.loadChat( chat );
        }
    }

    ngOnDestroy() {
        this.stopChatWatcher();
    }

    loadChat(chat: Chat) {
        this.isBusy = true;
        let chatId = chat.chat.id;
        this.ChatService.getChat( chatId )
            .then(
                (messages: Message[]) => {
                    this.isBusy = false;
                    this.messages = messages;
                    setTimeout( () => this.renderMessages(messages), 0);
                    this.runChatWatcher(chatId);
                }
            )
            .catch(
                () => {
                    this.isBusy = false;
                    this.messages = null;
                }
            );
    }

    renderMessages(messages: Message[]) {
        for (let message of messages) {
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

    runChatWatcher(chatId: number) {
        this.stopChatWatcher();
        this.chatWatcherId = setInterval(
            () => {
                this.ChatService.getNewMessages(chatId)
                    .then(
                        messages => this.renderMessages(messages)
                    );
            },
            this.CHAT_WATCHER_PERIOD
        );
    }

    stopChatWatcher() {
        clearInterval(this.chatWatcherId);
    }
}
