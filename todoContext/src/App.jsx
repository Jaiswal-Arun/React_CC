import {useState,useEffect} from 'react'
import { TodoProvider } from './contexts'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
function App() {

  // Old Approach 
  // This error (or high-level warning) is React's way of telling you that your app is doing unnecessary work. Because you are calling setTodos immediately inside useEffect, you are forcing React to:
  // Render the component with empty state.
  // Immediately realize it needs to render again with the real data.
  // This is what React calls a "Cascading Update." In a small app, it’s a tiny flicker; in a large app, it causes noticeable lag.
  // const [todos, setTodos] = useState([])
  //   useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"))
  //   if (todos && todos.length > 0) {
  //     setTodos(todos)
  //   }
  // }, [])

  // We have initialized all the functions and variables here so that is is accessible to provider (local to Provider)

  const todoAdd = (todo) => setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])

  const todoUpdate = (todo, id) => setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? todo : prevtodo ))

  const todoDelete = (id) => setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))

  const todoToggle = (id) => setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? { ...prevtodo, completed : !prevtodo.completed, } : prevtodo))
 
  // Lazy initialization / Lazy initial state in React's useState hook. 
  const [todos, setTodos] = useState(() => {
      try {
          const savedTodos = localStorage.getItem("todos");
          // If data exists, parse it; otherwise, return an empty array
          return savedTodos ? JSON.parse(savedTodos) : [];
      } catch (error) {
          console.error("Failed to load todos from localStorage:", error);
          return [];
      }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value = {{todos, todoAdd, todoUpdate, todoToggle, todoDelete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm/> 
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>    
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

