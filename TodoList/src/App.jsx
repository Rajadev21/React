import { useState } from 'react'

import './App.css'

function App() {
  let [todoList, updateTodo] = useState([  //in this todoList variable is pointing to the array.in that array there are objects.in that object we have stored the info about the todo.
    // {
    //   id: 1,
    //   task: "Learn React"
    // }
  ])

  let [userInputTodo, updateUserInputTodo] = useState("")
  
  function addNewTodoList() {
    let newTodo = [
      ...todoList,
      {
        id: todoList.length+1,
        task: userInputTodo
      }]
    updateTodo(newTodo)
    updateUserInputTodo("")

  }

  function deleteTodo(id) {
    let remainingTodo = todoList.filter((eachTodo) => {
      return eachTodo.id !== id
    })
    updateTodo(remainingTodo)
  }

  return (
    <>
      <div className='container mt-5 w-50'>
        <h1 className='text-center mb-3'>TodoList React </h1>
        <div className='input-group'>
          <input type="text" placeholder='Enter Your Tasks' className='form-control' onChange={(e) => {
            updateUserInputTodo(e.target.value)
          }} />
          <button className='btn btn-primary' onClick={addNewTodoList}>Add</button>
        </div>
        <ul className='list-group mt-3'>
          {
            todoList.map((eachTodo) => {
              return (
                <li className='list-group-item'>
                  <p>{eachTodo.task}</p>
                  <button className='btn'
                    onClick={() => {
                      deleteTodo(eachTodo.id)
                    }}><i class="fa-solid fa-trash"></i></button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
