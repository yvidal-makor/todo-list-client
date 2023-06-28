import "./App.css";
import { InputField } from "./components/InputField";
import { useState } from "react";
import { Todo } from "./components/model";
import { TodoList } from "./components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
  };

  return (
    <div className="app">
      <div className="heading">Taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList   />
    </div>
  );
};

export default App;
