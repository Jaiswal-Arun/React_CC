import { useState } from 'react'
import Button from './button'

function App() {

  const [color, setcolor] = useState("grey")
  const colors = ["indigo", "blue", "green", "yellow", "orange", "red", "olive", "purple", "pink"]

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="bg-white rounded-xl flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2">
          
          {colors.map((btnColor) => (
            <Button 
              key={btnColor}             
              color={btnColor}           
              handlecolor={setcolor}    // handlecolor = {(x) => setcolor(x)} 
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
