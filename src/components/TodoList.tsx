import React, { useState } from "react";
import "./style.css";
import { Todo } from "./model";
import { SingleTodo } from "./SingleTodo";
import { useAppSelector, useAppDispatch } from "../redux/hooks";



export const TodoList: React.FC = () => {
 const todosState = useAppSelector((state) => state.todos.todoList);
 const dispatch = useAppDispatch();

  

  return (
    <div className="todos">
      {todosState.map((todo) => (
        <SingleTodo
          todo={todo}
          // key={todo.id}
          // todos={todos}
          // setTodos={setTodos}
        />
      ))}
    </div>
  );
};
