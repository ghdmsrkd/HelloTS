import React, { useState } from "react";
import { connect } from "react-redux";
import { actonCreators } from "../store";
import ToDo from "../components/ToDo";

function Home( {toDos, addToDo} : any) {
    
  const [text, setText] = useState("");

  function onChange(e : any) {
    setText(e.target.value);
  }

  function onSubmit(e : any) {
    e.preventDefault();
    addToDo(text)
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
      <ul>
        {toDos.map((toDo : any) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state : any) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch : any){
    return {
        addToDo : (text : string) => dispatch(actonCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);