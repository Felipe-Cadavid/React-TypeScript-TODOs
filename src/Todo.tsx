import React from 'react'

type todoTypes = {
    name: String
}

type stateType = {
    todos: Array<todoTypes>
}

type propTypes = {
    todos: Array<todoTypes>,
    children: React.ReactNode,
    setState: React.Dispatch<React.SetStateAction<stateType>>;
    index: number
}

const Todo: React.FC<propTypes> = ({todos, setState, index, children}) => {

    const deleteTodo = () => {
        const newTodos: any = todos.filter((value, idx) => idx !== index)
        setState({todos: newTodos})
    }

    return (
        <div>
        <span>
          {children}  
        </span>
        <button onClick={deleteTodo}>x</button>
        </div>
    )
}

export default Todo
