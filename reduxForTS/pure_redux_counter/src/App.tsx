import React from 'react';
import { createStore } from "redux";

function App() {
  const add : any = document.getElementById("add")
  const minus : any = document.getElementById("minus")
  const number : any = document.querySelector("span")

  number.innerText = 10

  const ADD = "ADD"
  const MINUS = "MINUS"

  const countModifier = (count = 0, action : any) => {
    switch (action.type) {
      case ADD:
        return count + 1
      case MINUS:
        return count - 1
      default:
        return count;
    }
  }

  const countStore = createStore(countModifier)

  const onChange = () => {
    number.innerText = countStore.getState()
  }

  countStore.subscribe(onChange);

  const handleAdd = () => {
     countStore.dispatch({ type: ADD })
  }

  const handleMinus = () => {
    countStore.dispatch({ type: MINUS })
  }

  add.addEventListener("click", handleAdd)
  minus.addEventListener("click", handleMinus)
  

  console.log(countStore.subscribe)

  return (
  <div>
    

  </div>
  )
}

export default App;
