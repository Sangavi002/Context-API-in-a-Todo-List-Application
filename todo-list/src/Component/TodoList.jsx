import './TodoList.css';
import { useContext } from 'react';
import { TodoContext } from "../Context/TodoContext";

const TodoList = () => {
  const { todos, removeTodo,handleComplete } = useContext(TodoContext);

  return (
    <div className="TodoList">
      <h2 style={{textAlign: 'center', color: '#135D66'}}>Todo List</h2>
      <table>
        <thead>
            <tr>
                <th>Tasks</th>
                <th>Marked as Complete</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td><input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo.id)} /></td>
            <td><button className='remove' onClick={() => removeTodo(todo.id)}>Delete</button></td>
            
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
