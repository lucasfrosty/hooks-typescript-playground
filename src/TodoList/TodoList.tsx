import * as React from 'react';
import {Todo, TodoActionTypes, todoReducer} from './todoReducer';

function Counter() {
  const [state, dispatch] = React.useReducer(todoReducer, []);
  const [todoText, setTodoText] = React.useState('');

  function onAddTodo(): void {
    if (todoText) {
      dispatch({
        payload: todoText,
        type: TodoActionTypes.ADD,
      });

      setTodoText('');
    }
  }

  function onDeleteTodo(id: string) {
    return () => {
      dispatch({
        payload: id,
        type: TodoActionTypes.DELETE,
      });
    }
  }

  function onCheckTodo(id: string) {
    return () => {
      dispatch({
        payload: id,
        type: TodoActionTypes.CHECK,
      });
    }
  }

  function onChangeNewTodoText(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  const todoListMarkup = state.map((todo: Todo) => (
    <div key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onCheckTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={onDeleteTodo(todo.id)}>🗑</button>
    </div>
  ));
  
  const createTodoMarkup = (
    <>
      <input type="text" onChange={onChangeNewTodoText} value={todoText} />
      <button onClick={onAddTodo}>Create todo</button>
    </>
  );

  return (
    <div>
      {createTodoMarkup}
      {todoListMarkup}
    </div>
  )
}

export default Counter;