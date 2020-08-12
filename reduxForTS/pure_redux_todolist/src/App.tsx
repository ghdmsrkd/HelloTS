import React, { useEffect } from 'react';
import { createStore } from "redux";

function App() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  
  const ADD_TODO : string = "ADD_TODO";
  const DELETE_TODO : string = "DELETE_TODO";

  const reducer = (state: any[] = [], action : any) => {
    console.log(state.filter((toDo : any) => toDo.id !== action.id ))
    switch (action.type) {
      case ADD_TODO:
        return [{text : action.text, id : Date.now() }, ...state];
      case DELETE_TODO:
        return state.filter((toDo : any) => toDo.id !== action.id );
      default:
        return state;
      }
  };

  const store = createStore(reducer);

  store.subscribe(() => console.log(store.getState()))

  const onSubmit = (e : any) => {
    e.preventDefault();

    if (!input)
      return null;

    const toDo = input.value;
    input.value = "";
    addToDo(toDo);
  };

  const addToDo = (text : string) => {
    store.dispatch({ type: ADD_TODO, text : text});
  }

  const deleteToDo = (e : any) => {
    console.log(e.target.parentNode)
    const id : number= parseInt( e.target.parentNode.id);
    store.dispatch({type : DELETE_TODO, id : id})
    
  }

  const paintToDos = () => {
    const toDos : any[] = store.getState();
    ul!.innerHTML = "";
    toDos.forEach(toDo => {
      const li : any = document.createElement("li");
      const btn : any = document.createElement("button");
      btn.innerText = "DEL";
      btn.addEventListener("click", deleteToDo)
      li.id = toDo.id;
      li.innerText = toDo.text;
      ul?.appendChild(li);
      li.appendChild(btn);
    })
    
    
  }

  store.subscribe(paintToDos)


  

  

  useEffect(() => {
    if (!form)
      return;

    form.addEventListener("submit", onSubmit);
  })

  return (
  <div>
    

  </div>
  )
}

export default App;
