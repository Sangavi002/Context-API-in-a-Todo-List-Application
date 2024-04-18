
import {useState}  from 'react';
import { createContext } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleComplete = (id) => {
    const newTodo = todos.map(item =>
        item.id === id ? { ...item, completed: true} : item
    );
    setTodos(newTodo);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, handleComplete}}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
