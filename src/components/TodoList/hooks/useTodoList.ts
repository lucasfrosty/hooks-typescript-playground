import * as React from 'react';
import {Todo, TodoActionTypes, todoReducer} from './todoReducer';

interface Functions {
  addTodo(todoText: string): void;
  deleteTodo(payload: string): void;
  checkTodo(payload: string): void;
}

export default function useTodoList(): [Todo[], Functions] {
  const [state, dispatch] = React.useReducer(todoReducer, []);

  function addTodo(todoText: string) {
    dispatch({
      payload: todoText,
      type: TodoActionTypes.ADD,
    });
  }

  function deleteTodo(id: string) {
    return dispatch({
      payload: id,
      type: TodoActionTypes.DELETE,
    });
  }

  function checkTodo(id: string) {
    return dispatch({
      payload: id,
      type: TodoActionTypes.CHECK,
    });
  }

  return [state, {addTodo, deleteTodo, checkTodo}];
}