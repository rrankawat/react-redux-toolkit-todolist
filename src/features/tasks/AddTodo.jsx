import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter new todo here..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="btn btn-primary btn-sm mt-3"
        onClick={() => addTodo(todo)}
      >
        Add New
      </button>
    </>
  );
};

export default AddTodo;
