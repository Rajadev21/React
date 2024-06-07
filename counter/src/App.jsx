import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseValue = () =>{
    if(count < 20){
      setCount(count+1)
    }
  }
  const decreaseValue = ()=>{
    if(count >0)
    setCount(count-1)
  }

  return (
    <>
     <h1>Hello Raja</h1>
     <h2>counter value {count}</h2>
     <button onClick={increaseValue}>increase counter</button>
     <button onClick={decreaseValue}>decrease counter</button>
     <p>counter value {count}</p>
    </>
  )
}

export default App
