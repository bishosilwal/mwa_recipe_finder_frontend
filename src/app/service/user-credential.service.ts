import { Injectable } from '@angular/core';

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

  constructor() {}

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
}
