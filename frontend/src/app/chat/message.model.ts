import {Standard} from 'app/standard.model';
import {User} from 'app/user/model';

export class Message {
    id: number;
    message: string;
    creation_datetime: Date;
    chat: Standard;
    user: User;
    isMyself: boolean;
}
