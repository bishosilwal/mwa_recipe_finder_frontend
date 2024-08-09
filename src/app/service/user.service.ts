import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this._http.post(baseUrl + 'signup', user);
  }

  login(user: any): Observable<any> {
    return this._http.post(baseUrl + 'login', user);
  }
}
