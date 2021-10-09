import React from "react";
import Todo from "./Todo";

type propTypes = {
  todos: Array<any>;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
};

type stateType = {
  todos: Array<todoTypes>;
};

type todoTypes = {
  name: String;
};

const TodoList: React.FC<propTypes> = ({ todos, setState }) => {
  return (
    <div>
      {todos.length ? (
        todos.map((todo: todoTypes, index: number) => {
          return (
            <Todo todos={todos} key={index} index={index} setState={setState}>
              {todo.name}
            </Todo>
          );
        })
      ) : (
        <h1>No todos left!</h1>
      )}
    </div>
  );
};

export default TodoList;
