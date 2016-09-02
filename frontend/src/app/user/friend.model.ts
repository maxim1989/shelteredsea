import {User} from './model';

export class Friend {
    is_friend: boolean = false;
    is_ignore: boolean = false;
    user_friend: User;
    user: User;
}
