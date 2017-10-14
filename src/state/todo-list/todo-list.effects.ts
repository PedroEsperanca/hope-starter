// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as TodoListActions from './todo-list.actions';

export type Action = TodoListActions.All;

@Injectable()
export default class TodoListEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) {}

  @Effect() login$: Observable<Action> = this.actions$.ofType(TodoListActions.ADD_TODO)
    .mergeMap(action =>
      // [ Hack ] should typeckeck `payload`
      this.http.post('/add-todo', action['payload'])

        .map(data => ({ type: TodoListActions.ADD_TODO_SUCCESS, payload: data }))

        .catch(() => of({ type: TodoListActions.ADD_TODO_FAIL }))
    );
}
