import React from 'react';
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: '#D20062'}}>Todo App</h1>
        <TodoForm />
        <TodoList />
    </div>
  );
}

export {App};
