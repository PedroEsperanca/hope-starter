import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { SidePanelModule } from './side-panel/side-panel.module';

@NgModule({
  imports: [
    HeaderModule
  ],
  exports: [
    HeaderModule,
    SidePanelModule
  ],
})
export class SharedModule { }
