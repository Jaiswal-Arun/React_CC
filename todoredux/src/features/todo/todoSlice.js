import {createSlice, nanoid} from '@reduxjs/toolkit'

const items = localStorage.getItem("todos") !== null ? JSON.parse(localStorage.getItem('todos')) : []

const initialState = {
    todos: items.length > 0 ? items :  []
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        todoAdd : (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload, 
                completed:false, 
                editable:false
            }
            state.todos.push(todo)
        },
        todoDelete : (state, action) => { 
            state.todos = state.todos.filter((todo) => action.payload.id !== todo.id )
        },
        todoToggle : (state, action) => {
            state.todos = state.todos.map((todo) => action.payload.id === todo.id ? {...todo, completed: !todo.completed} : todo)
        },
        todoUpdate : (state, action) => {

            state.todos = state.todos.map((todo) => action.payload.id === todo.id ? {...todo, text: action.payload.text} : todo)
        },
        todoEdit : (state, action) => {
            state.todos = state.todos.map((todo) => action.payload.id === todo.id ? {...todo, editable: !todo.editable} : todo)
        }
    }
})

export const {todoAdd, todoDelete, todoToggle, todoUpdate, todoEdit} = todoSlice.actions

export default todoSlice.reducer 