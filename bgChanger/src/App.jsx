import { useState } from 'react'
import Button from './button'

function App() {

  const [color, setcolor] = useState("grey")
  
  return (
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
      <div className="bg-white rounded-xl flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2">
        <button className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 hover:brightness-110 hover: cursor-pointer" style={{backgroundColor:'violet'}} onClick={() => setcolor("green")}> Green 
        </button>
        <Button color = 'indigo' handlecolor = {(ok) => setcolor(ok)} />
        <Button color = 'blue' handlecolor = {() => setcolor('blue')} />  
        <Button color = 'green' handlecolor = {() => setcolor('green')} />
        <Button color = 'yellow' handlecolor = {() => setcolor('yellow')} />
        <Button color = 'orange' handlecolor = {() => setcolor('orange')} />
        <Button color = 'red' handlecolor = {() => setcolor('red')} />
        <Button color = 'olive' handlecolor = {() => setcolor('olive')} />
        <Button color = 'purple' handlecolor = {() => setcolor('purple')} />          
      </div>
    </div>
  </div>
  )
}

export default App
