
import { useState, useContext } from 'react';
import { TodoContext } from "../Context/TodoContext";

const TodoForm = () => {
  const { addTodo,todos } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo({
      id: todos.length,
      title,
      completed: false
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <input
          type="text"
          style={{margin: '10px',padding: '5px 10px'}}
          placeholder="Enter new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" 
                style={{margin: '10px',padding: '5px 10px', border: 'none', background: 'green', color: 'white'}}>
                Add Todo</button>
      </div>
    </form>
  );
}

export default TodoForm;
