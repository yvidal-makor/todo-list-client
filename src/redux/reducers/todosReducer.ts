import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Todo } from "../../components/model";

// Define a type for the slice state
interface TodosState {
  todoList: Todo[];
}

const initialState: TodosState = {
  todoList: [],
};

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todoList = [...state.todoList, action.payload];
    },
    editTodoState: (state, action: PayloadAction<Todo>) => {
      const obj = { ...action.payload };
      const copyTodoList = [...state.todoList];
      const index = state.todoList.findIndex((t) => t.id === obj.id);
      if (index !== -1) {
        copyTodoList.splice(index, 1, { ...obj });
      }
      state.todoList = copyTodoList;
    },
  },
});

export const { add, editTodoState } = todosSlice.actions;
export default todosSlice.reducer;
