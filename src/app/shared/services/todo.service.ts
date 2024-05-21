import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodo } from '../models/todos.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
BASE_URL : string = environment.baseUrl;
TODOS_URL : string = `${this.BASE_URL}/todos`
  constructor(
    private _http : HttpClient
  ) { }

  fetchAllTodos() : Observable<Array<Itodo>>{
    return this._http.get<Array<Itodo>>(this.TODOS_URL)
      .pipe(
        tap(res => console.log(res)),
        map(res => {
          return res.filter(todo => todo.completed)

        })
      )
  }
}
