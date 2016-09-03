import {User} from './model';

export class Friend {
    is_friend: boolean = false;
    is_ignore: boolean = false;
    friend: User;
    myself: User;
}
