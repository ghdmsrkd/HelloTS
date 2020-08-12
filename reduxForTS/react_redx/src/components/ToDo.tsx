import React from "react";
import { connect } from "react-redux";
import { actonCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text , onBtnClick, id } : any) {
  
  return (
    <li>
        <Link to={`/${id}`}>
            {text} 
        </Link>
        <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch : any, ownProps : any) {
  return {
    onBtnClick: () => dispatch(actonCreators.deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);