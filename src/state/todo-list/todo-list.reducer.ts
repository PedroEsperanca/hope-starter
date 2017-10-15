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
            const newstate = Object.assign({}, state);
            const index = newstate.todos.findIndex(todo => todo.name === action.payload.name);
            newstate.todos[index].done = !newstate.todos[index].done;
            return newstate;
        }

        default: {
            return state;
        }
    }
}
