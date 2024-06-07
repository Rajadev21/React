import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Keypad from './Keypad'

function App() {
  let [input,setInput]=useState("")

  function handleClick(value){
    setInput(input+value)
  }
  function calculate(){
    let outputValue = eval(input)
    setInput(outputValue)
  }

  function handleClear(){
    setInput("")
  }
  return (
    <>
      <div className='container'>
        <h1>Calculator Using React</h1>
        <div className='calculator'>
          <input type="text" value={input} className='outputScreen' />
          <Keypad handleClick = {handleClick} calculate = {calculate} handleClear = {handleClear} />
        </div>
      </div>
    </>
  )
}

export default App
