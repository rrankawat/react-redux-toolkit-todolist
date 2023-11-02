import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        action.payload === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
