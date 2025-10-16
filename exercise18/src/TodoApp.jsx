import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Todo App </h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;