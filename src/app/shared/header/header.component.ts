import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as UIActions from '../../../state/UI/UI.actions';
import { State } from '../../../state/UI/UI.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() showSidepanelButton;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  toggleSidePanel(name: String) {
    this.store.dispatch({
      type: UIActions.TOGGLE_SIDE_PANEL
    });
  }

}
