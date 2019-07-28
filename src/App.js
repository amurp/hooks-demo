import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      ;
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Task 1',
      isCompleted: false
    },
    {
      text: 'Task 2',
      isCompleted: false
    },
    {
      text: 'Task 3',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    setTodos([...todos, { text }]);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
