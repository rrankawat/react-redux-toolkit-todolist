import { useState } from 'react';

import AddTodo from '../features/tasks/AddTodo';
import TodoList from '../features/tasks/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const todo = {
      id: new Date().getTime(),
      title,
      isCompleted: false,
    };
    setTodos([...todos, todo]);
  };

  const completeTodo = (id) => {
    const items = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(items);
  };

  const deleteTodo = (id) => {
    const items = todos.filter((todo) => todo.id !== id);
    setTodos(items);
  };

  return (
    <div className="w-50">
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Home;
