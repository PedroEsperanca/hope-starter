import { State, intitialState } from './UI.state';
import * as UIActions from './UI.actions';

export type Action = UIActions.All;

export default function todoListReducer(state = intitialState, action: Action): State {
    switch (action.type) {
        case UIActions.TOGGLE_SIDE_PANEL: {
            const newstate = Object.assign({}, state);
            newstate.sidePanel.isOpen = !newstate.sidePanel.isOpen;
            return newstate;
        }

        default: {
            return state;
        }
    }
}
