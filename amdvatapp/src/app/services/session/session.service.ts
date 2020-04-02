import {Injectable} from '@angular/core';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {LogInService} from '../log-in/log-in.service';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor(
        private nativeStorage: NativeStorage,
        public platform: Platform
    ) {
    }

    setUser(user: any): void {
        user = JSON.stringify(user);
        if (this.platform.is('android')) {
            this.nativeStorage.setItem('user', user)
                .then(
                    (data) => console.log('Stored first item!', data),
                    error => console.error('Error storing item', error)
                );
        } else {
            localStorage.setItem('user', user);
        }
    }

    getUser(): any {
        if (this.platform.is('android')) {
            return this.nativeStorage.getItem('user')
                .then(
                    (data) => {
                        return JSON.parse(data);
                    }
                );
        } else {
            return JSON.parse(localStorage.getItem('user'));
        }
    }

    removeUser(): any {
        if (this.platform.is('android')) {
            return this.nativeStorage.remove('user')
                .then(
                    data => console.log(data),
                    error => console.error(error)
                );
        } else {
            return localStorage.removeItem('user');
        }
    }

    getUserToken(fun): any {
        if (this.platform.is('android')) {
            this.nativeStorage.getItem('user')
                .then(
                    (data) => {
                        fun(JSON.parse(data).token);
                    }
                );
        } else {
            fun(JSON.parse(localStorage.getItem('user')).token);
        }
    }

    getUserTipo(): any {
        if (this.platform.is('android')) {
            return this.nativeStorage.getItem('user')
                .then(
                    (data) => {
                        return JSON.parse(data);
                    }
                );
        } else {
            return JSON.parse(localStorage.getItem('user'));
        }
    }

    setUserEmail(email: string): void {
        let obj = { email: `${email}`};
        email = JSON.stringify(obj);
        if (this.platform.is('android')) {
            this.nativeStorage.setItem('userEmail', email)
                .then(
                    (data) => console.log('Stored first item!', data),
                    error => console.error('Error storing item', error)
                );
        } else {
            localStorage.setItem('userEmail', email);
        }
    }

    getUserEmail(fun): any {
        if (this.platform.is('android')) {
            this.nativeStorage.getItem('userEmail')
                .then(
                    (data) => {
                        fun(JSON.parse(data).email);
                    }
                );
        } else {
            fun(JSON.parse(localStorage.getItem('userEmail')).email);
        }
    }

    removeUserEmail(): any {
        if (this.platform.is('android')) {
            return this.nativeStorage.remove('userEmail')
                .then(
                    data => console.log(data),
                    error => console.error(error)
                );
        } else {
            return localStorage.removeItem('userEmail');
        }
    }


    isLogged(): boolean {
        return false;
    }
}

