import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text : string) => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = (id : string) => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

const reducer = (state : any = [], action : any) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo : any) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actonCreators ={
  addToDo,
  deleteToDo
}

export default store;