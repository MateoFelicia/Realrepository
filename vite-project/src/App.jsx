import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="container" style={{ display:"flex" ,color:"white" ,width:"700", height:"700"}}> Diario del festival de heavy metal de la abuela </h1>
      <nav style={{ color:"black" ,width:"700", height:"700"}}>  {count} </nav>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          incrementar 
        </button>
      </div>

      <div className="card2">
      <button onClick={() => setCount((count) => count - 1)}>
          decrementar 
        </button>
      </div>
    </>
  )
}

export default App
