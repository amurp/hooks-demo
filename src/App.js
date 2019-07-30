import React, { useState } from 'react';
import uniqid from 'uniqid';

const Todo = ({ todo, onComplete, onRemove }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}
    >
      {todo.text}
      <button onClick={onComplete}>Complete</button>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
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
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Task 1',
      isComplete: false,
      id: uniqid()
    },
    {
      text: 'Task 2',
      isComplete: false,
      id: uniqid()
    },
    {
      text: 'Task 3',
      isComplete: false,
      id: uniqid()
    }
  ]);

  const addTodo = text => {
    setTodos([...todos, { text, id: uniqid() }]);
  };

  const completeTodo = id => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = id => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => completeTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
