import React, { useState } from "react";
import "./styles.css";
import { ImcompleteTodo } from "./components/ImcompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const addTodo = () => {
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  const addToCompleteTodo = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <h1>Todoリスト</h1>
      <form className="newEvent" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="内容"
          variant="outlined"
          value={todoText}
          onChange={onChangeTodoText}
        />
      </form>
      <Button onClick={addTodo} variant="contained" color="primary">
        Todo作成
      </Button>
      <ImcompleteTodo
        todos={imcompleteTodos}
        addToCompleteTodo={addToCompleteTodo}
      />
      <CompleteTodo todos={completeTodos} />
    </>
  );
};
