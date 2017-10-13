import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
