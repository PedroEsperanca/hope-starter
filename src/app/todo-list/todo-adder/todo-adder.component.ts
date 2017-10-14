import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-adder',
  templateUrl: './todo-adder.component.html',
  styleUrls: ['./todo-adder.component.scss']
})
export class TodoAdderComponent implements OnInit {

  newTask: String = '';

  @Output() addTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTask_(){
    this.addTask.emit(this.newTask);
    this.newTask = '';
  }

}
