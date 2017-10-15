import { Action } from '@ngrx/store';

export const TOGGLE_SIDE_PANEL     = '[UI] TOGGLE_SIDE_PANEL';
export const CLOSE_SIDE_PANEL     = '[UI] CLOSE_SIDE_PANEL';


export class ToggleSidePanel implements Action {
  readonly type = TOGGLE_SIDE_PANEL;
  constructor() { }
}

export type All
  = ToggleSidePanel;
