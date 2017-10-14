import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as TodoListActions from '../../state/todo-list/todo-list.actions';
import { State } from '../../state/todo-list/todo-list.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list$: Observable<any>;

  newTask: String = '';

  list: Array<any> = [
    { name: 'clean room', done: false },
    { name: 'make pancakes', done: false },
    { name: 'spend 3 hours on reddit', done: true }
  ];

  constructor(private store: Store<any>) {
    this.list$ = store.select('todoListStore');
  }

  ngOnInit() {
  }

  addTask(newTask) {
    this.list.push({
      name: newTask,
      done: false
    });
  }

}
