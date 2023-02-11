import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, complitedTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          complitedTodo={complitedTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
