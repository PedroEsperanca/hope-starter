import { State, intitialState } from './todo-list.state';
import * as TodoListActions from './todo-list.actions';

export type Action = TodoListActions.All;

export default function todoListReducer(state = intitialState, action: Action): State {
    switch (action.type) {
        case TodoListActions.ADD_TODO: {
            const newstate = Object.assign({}, state);
            newstate.todos = [
                ...newstate.todos,
                {
                    name: action.payload.name,
                    done: false,
                }
            ];
            return newstate;
        }

        case TodoListActions.TOGGLE_TODO: {
            // [ HACK ] replace with more effective tecnique
            const newstate = JSON.parse(JSON.stringify(state));
            newstate.todos = newstate.todos.map( todo => {
              if (todo.name === action.payload.name) {
                todo.done = !todo.done;
              }
              return todo;
            });
            return newstate;
        }

        default: {
            return state;
        }
    }
}
