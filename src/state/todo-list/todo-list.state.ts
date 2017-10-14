export interface State {
  todos: Array<Todo>;
}

export interface Todo {
  name: string;
  done: boolean;
}

export const intitialState: State = {
  todos: [
      { name: 'clean room', done: false },
      { name: 'make pancakes', done: false },
      { name: 'spend 3 hours on reddit', done: true }
  ]
};
