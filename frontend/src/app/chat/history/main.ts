import {Component, ElementRef} from '@angular/core';
import { Message } from 'app/chat/message.model';
import { UserService } from 'app/user/auth.service';

@Component({
    selector: 'chat-history',
    templateUrl: './main.html'
})
export class ChatHistoryComponent {
    messages: Message[] = [];

    constructor(
        private UserService: UserService,
        private el: ElementRef
    ) {}

    postNewMessage(message: Message) {
        message.isMyself = this.isMyselfMessage(message);
        message.message = message.message.replace("\n", "<br>");
        this.messages.push(message);
        setTimeout( () => this.scrollToLastMessage(), 0);
    }

    private scrollToLastMessage() {
        let el = this.el.nativeElement;
        el.scrollTop = el.scrollHeight - el.clientHeight;
    }

    isMyselfMessage(message: Message) {
        return ( message.user.uid_for_client.name == this.UserService.getUid() );
    }
    
}
