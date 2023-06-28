import React, { useState, useRef } from "react";
import "./style.css";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { add } from "../redux/reducers/todosReducer";
import todosSlice from "../redux/reducers/todosReducer";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todos = useAppSelector((state) => state.todos.todoList);
  const dispatch = useAppDispatch();
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        dispatch(add({ id: Date.now(), todo, isDone: false }));
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
