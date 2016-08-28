import {Standard} from 'app/standard.model';

export class User {
    id : number;
    username : string;
    is_autorized : boolean = false;
    is_friend: boolean = false;
    is_ignore: boolean = false;
    dispute_name: Standard;
    statistic_name: Standard;
    uid_for_client: Standard;

    is_busy: boolean = false;
}
