import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { routing } from './todo-list.routes';

import { TodoItemModule } from './todo-item/todo-item.module';
import { TodoAdderModule } from './todo-adder/todo-adder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,

    TodoItemModule,
    TodoAdderModule
  ],
  declarations: [TodoListComponent]
})
export class TodoListModule { }
