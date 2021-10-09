import React, { MutableRefObject, useRef, useState } from "react";

type todoTypes = {
  name: String;
};

type stateType = {
  todos: Array<todoTypes>;
};

type propTypes = {
  setState: React.Dispatch<React.SetStateAction<stateType>>;
};

const TodoCreate: React.FC<propTypes> = ({ setState }) => {
  const [todo, setTodo] = useState<todoTypes>({name: ''});
  const inputRef: MutableRefObject<any> = useRef()

  const createTodo = () => {
    if(!todo.name) return;
    setState((prevState) => ({
      ...prevState,
      todos: [...prevState.todos, todo],
    }));
    setTodo({name: ''});
    inputRef.current.value = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoName: string = e.target.value;
    setTodo({ name: todoName });
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <button onClick={createTodo}>Add todo</button>
    </div>
  );
};

export default TodoCreate;
