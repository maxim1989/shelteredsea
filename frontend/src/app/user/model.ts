import {Standard} from 'app/standard.model';
import {Balance} from 'app/rate/balance.model';

export class User {
    id : number;
    username : string;
    is_autorized : boolean = false;
    is_friend: boolean = false;
    is_ignore: boolean = false;
    dispute_name: Standard;
    statistic_name: Standard;
    uid_for_client: Standard;
    balance: Balance;

    is_busy: boolean = false;

    //TODO
    public Uid():string {
        console.log('user uid');
        return this.uid_for_client.name;
    }
}
