import { Injectable } from '@angular/core';
import { ApiNotificationService } from './api-notification.service';

export class UserToken {
  #token: string = '';

  get token() {
    return this.#token;
  }

  set token(token: string) {
    this.#token = token;
  }

  constructor() {}
}

@Injectable({
  providedIn: 'root',
})
export class UserCredentialService {
  userToken: UserToken = new UserToken();

  constructor(private _notificationService: ApiNotificationService) {}

  setToken(token: string) {
    this.userToken.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    let token = localStorage.getItem('token');
    if (token) {
      this.userToken.token = token;
    } else {
      this.userToken.token = '';
    }
    return this.userToken.token;
  }

  isLogin() {
    return !!this.getToken();
  }

  logout() {
    this.setToken('');
    this._notificationService.setMessage('Logout Successfully');
  }
}
