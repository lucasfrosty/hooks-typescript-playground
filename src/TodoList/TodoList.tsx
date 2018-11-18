import * as React from 'react';
import {Todo, useTodoList} from './hooks';

function Counter() {
  const [
    state,
    {
      checkTodo,
      deleteTodo,
      addTodo,
    }
  ] = useTodoList();
  const [todoText, setTodoText] = React.useState('');

  function onChangeNewTodoText(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  const onCheckTodo = (id: string) => () => checkTodo(id);
  const onDeleteTodo = (id: string) => () => deleteTodo(id);
  const onAddTodo = (text: string) => {
    return () => {
      if (text) {
        addTodo(text);
        setTodoText('');
      }
    }
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
      <button onClick={onAddTodo(todoText)}>Create todo</button>
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