import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <ul className="list-group mt-5">
      {todos.map((todo) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={todo.id}
        >
          <span>
            {todo.title}{' '}
            {todo.isCompleted ? <AiFillCheckCircle color="green" /> : ''}
          </span>
          <div>
            <span
              className={`cursor me-2 badge bg-${
                todo.isCompleted ? 'secondary' : 'primary'
              }`}
              onClick={() => completeTodo(todo.id)}
            >
              {todo.isCompleted ? 'Undone' : 'Done'}
            </span>
            <span
              className="badge bg-danger cursor"
              onClick={() => deleteTodo(todo.id)}
            >
              <AiFillDelete />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
