import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{}],
    todoUpdate : () => {},
    todoDelete : () => {},
    todoAdd : () => {},
    todoToggle : () => {}
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider


