import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

type todoTypes = {
  name: String
}

type stateType = {
  todos: Array<todoTypes>
}

function App() {
  const [state, setState] = useState<stateType>({
    todos: [{ name: "Clean my room" }, { name: "Take a shower" }, {name: "Brush my teeth"}, {name: "Code"}],
  })
  return (
    <div className="App">
      <TodoCreate setState={setState} />
      <TodoList setState={setState} todos={state.todos} />
    </div>
  );
}

export default App;
