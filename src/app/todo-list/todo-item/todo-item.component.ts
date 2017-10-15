import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoListActions from '../../../state/todo-list/todo-list.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  toggleTodo(name: String) {
    this.store.dispatch({
      type: TodoListActions.TOGGLE_TODO,
      payload: { name }
    });
  }

}
