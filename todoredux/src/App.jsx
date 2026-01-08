import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import './App.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {

  const todos = useSelector(state => state.todos)

  useEffect(() => {
    localStorage.setItem("todos", (JSON.stringify(todos)))
  },[todos])

  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Learn about redux toolkit</h1>
      <TodoForm />
      <div className='mt-5'>
        <TodoItem />
      </div>
      
    </>
  )
}

export default App
