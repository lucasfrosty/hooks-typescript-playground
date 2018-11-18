import {v4} from 'uuid';

export interface Todo {
  text: string;
  completed: boolean;
  id: string;
}

type State = Todo[];

export enum TodoActionTypes {
  ADD,
  DELETE,
  CHECK,
}

interface Action {
  type: TodoActionTypes,
  payload?: string;
}

export function todoReducer(state: State, action: Action): State {
  switch(action.type) {
    case TodoActionTypes.ADD:
      return [
        ...state,
        {
          completed: false,
          id: v4(),
          text: action.payload,
        } as Todo,
      ];
    case TodoActionTypes.DELETE:
      return state.filter(todo => todo.id !== action.payload);
    case TodoActionTypes.CHECK:
      return state.map(todo =>
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    default:
      return state;
  }
}