import {Standard} from 'app/standard.model';
import {User} from 'app/user/model';

export class Chat {
    chat: Standard;
    user: User;
    count_not_read_messages: number;
}
