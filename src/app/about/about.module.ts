import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { routing } from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
