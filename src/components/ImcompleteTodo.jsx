import React from "react";
import Button from "@material-ui/core/Button";
export const ImcompleteTodo = (props) => {
  const { todos, addToCompleteTodo } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <Button
                onClick={() => {
                  addToCompleteTodo(index);
                }}
                variant="contained"
                color="primary"
              >
                完了
              </Button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
