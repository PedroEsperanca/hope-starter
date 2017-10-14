import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoAdderComponent } from './todo-adder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoAdderComponent],
  exports: [TodoAdderComponent]
})
export class TodoAdderModule { }
