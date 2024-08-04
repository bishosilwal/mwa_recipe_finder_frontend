import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import DishType from '../types/dishType';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private _http: HttpClient) {}

  getAll(offset: number, count: number): Observable<DishType[]> {
    let params = new HttpParams({
      fromObject: {
        offset: offset,
        count: count,
      },
    });
    return this._http.get<DishType[]>(baseUrl + 'dishes', { params: params });
  }

  findById(id: string): Observable<DishType> {
    return this._http.get<DishType>(baseUrl + 'dishes/' + id);
  }

  create(dish: DishType) {
    return this._http.post(baseUrl + 'dishes', dish);
  }

  update(dish: DishType) {
    return this._http.put(baseUrl + 'dishes/' + dish._id, dish);
  }

  delete(dish: DishType) {
    return this._http.delete(baseUrl + 'dishes/' + dish._id);
  }
}
