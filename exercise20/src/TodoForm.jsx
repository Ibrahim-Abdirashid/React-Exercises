import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className=' flex w-full gap-2'>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        className='flex-1 py-2 px-4 rounded-xl outline-0 border-2 border-gray-300 focus:border-black '
      />
      <button onClick={handleAdd} className='border-none bg-fuchsia-700 py-2 px-4 text-white rounded-xl'>Add</button>
    </div>
  );
};

export default TodoForm;