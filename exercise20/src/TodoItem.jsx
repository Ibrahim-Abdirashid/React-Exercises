import { useContext } from 'react';
import TodoContext from './TodoContext';


const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
      <li className='flex gap-4 items-center bg-gray-300 py-2 px-4 rounded text-2xl'>
      
        <input type="checkbox" className=''/>
      <span
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
        className='flex-1'
      > 
     
      
          
        {todo.text}
       
      </span>
      <button onClick={() => dispatch({ type: 'delete', payload: todo.id })} className='text-red-700 text-base'>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;