import React from "react";
import { actonCreators } from "../store";
import { connect } from "react-redux";

function Detail({toDo, deleteToDo} : any){
    console.log(toDo)
    return(
        <>
            <h1>{toDo?.text}</h1>
            <h5>Create at : {toDo?.id}</h5>
            <button onClick={deleteToDo}>DEL</button>
        </>
    )
}

function mapStateToProps(state : any, ownProps : any){
    const {
        match: {
          params: { id }
        }
      } = ownProps;
      return { toDo: state.find((toDo : any) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch : any, ownProps : any){
    return {
        deleteToDo : () => {
            dispatch(actonCreators.deleteToDo(ownProps.match.params.id))
            window.location.href="/#/";
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);