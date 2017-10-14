import { Action } from '@ngrx/store';

export const ADD_TODO     = '[TODO-LIST] ADD_TODO';
export const TOGGLE_TODO  = '[TODO-LIST] TOGGLE_TODO';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: {name: string}) { }
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: {name: string, done?: boolean}) { }
}

export type All
  = AddTodo
  | ToggleTodo;
