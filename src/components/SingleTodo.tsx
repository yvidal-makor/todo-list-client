import React, { useState, useRef, useEffect } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { editTodoState } from "../redux/reducers/todosReducer";

import "./style.css";
interface Props {
  todo: Todo;
}

export const SingleTodo: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleDone = (id: number) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
  //     ),
  //   );
  // };
  // const handleDelete = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const handleEdit = (e: React.FormEvent, id: number) => {
    // e.preventDefault();
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, todo: editTodo } : todo,
    //   ),
    // );
    // setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          editTodoState({ id: todo.id, isDone: todo.isDone, todo: editTodo }),
        );
        setEdit(false);
      }}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={() => setEdit(true)}>
          <AiFillEdit />
        </span>
        <span
          className="icon"
          // onClick={() =>
          // handleDelete(todo.id)
          // }
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          //   onClick={() =>
          //   // handleDone(todo.id)
          // }
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};
