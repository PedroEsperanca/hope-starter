import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list.component';
import { routing } from './todo-list.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TodoListComponent]
})
export class TodoListModule { }
