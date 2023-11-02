import AddTodo from '../components/tasks/AddTodo';
import TodoList from '../components/tasks/TodoList';

const Home = () => {
  return (
    <div className="w-50">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
