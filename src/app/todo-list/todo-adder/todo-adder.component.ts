import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as TodoListActions from '../../../state/todo-list/todo-list.actions';
import { State } from '../../../state/todo-list/todo-list.state';

@Component({
  selector: 'app-todo-adder',
  templateUrl: './todo-adder.component.html',
  styleUrls: ['./todo-adder.component.scss']
})
export class TodoAdderComponent implements OnInit {

  newTask: String = '';

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  addTask(name: String) {
    this.store.dispatch({
      type: TodoListActions.ADD_TODO,
      payload: { name }
    });
  }

}
