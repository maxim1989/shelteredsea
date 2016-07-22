import { Injectable } from '@angular/core';
import { User } from './model';

@Injectable()
export class UserService {
    getAuthUser() {
        let user : User = {id: 10, name: 'Test User', is_auth: true};
        // return Promise.resolve(user);
        return new Promise<User>(resolve =>
            setTimeout( () => resolve(user), 2000));
        // return Promise.reject(user);
    }
}