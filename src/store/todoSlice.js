import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'TaskList',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state,action) {
        console.log(state);
        console.log(action);
        state.todos.push({
            id: new Date().toISOString(),
            text:action.payload.text,
            complited: false
        })
    },
    removeTodo(state,action) {},
    complitedTodo(state,action) {}
  }
});

export const {addTodo,removeTodo,complitedTodo} = todoSlice.actions

export default todoSlice.reducer