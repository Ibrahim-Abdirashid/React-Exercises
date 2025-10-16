import { useContext } from 'react';
import TodoContext from './TodoContext';

import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
      <li className={styles.container}>
      
        <input type="checkbox" className={styles.chec }/>
      <span
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
        
      > 
     
      
          
        {todo.text}
       
      </span>
      <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;