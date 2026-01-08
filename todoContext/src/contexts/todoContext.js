import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // Initializing them is optional.
    // todos : [],
    // todoUpdate : () => {},
    // todoDelete : () => {},
    // todoAdd : () => {},
    // todoToggle : () => {}
})

// Here, we are exporting the hook useTodo and now with the help of this we don't have to import the TodoContext. We just have to import the hook and do like this 
// import useTod from ''
// const todoAdd = useTodo()
export const useTodo = () => useContext(TodoContext)

// Now, we dont have to wrap the childrens inside TodoContext.Provider. Instead we can only use TodoProvider by importing it.  
export const TodoProvider = TodoContext.Provider


