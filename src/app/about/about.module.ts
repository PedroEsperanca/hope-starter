import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { routing } from './about.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    routing,
    SharedModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
