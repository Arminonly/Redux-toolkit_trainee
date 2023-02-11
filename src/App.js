import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complited: false
        }
      ]);
      setText('');
    }
  };
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const complitedTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complited: !todo.complited
        };
      })
    );
  };

  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTodo} handleInput={setText} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        complitedTodo={complitedTodo}
      />
    </div>
  );
}

export default App;
