import { Injectable } from '@angular/core'
import { IUser } from './user.model';

@Injectable()
export class AuthService {

    currentUser: IUser
    constructor() {
        this.currentUser = {
            id: 1,
            UserName: '',
            firstName: '',
            lastName: ''
        }

    }
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            UserName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}