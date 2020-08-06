import React from 'react';
import './App.css';

class App extends React.Component {
  state ={
    count:0
  }
  add = () => {
   this.setState((current :any ) => ({count : current.count + 1}));
  } 

  minus = () => {
    this.setState((current : any) => ({count : current.count - 1}));
  } 

  componentDidMount(){
    console.log("Hello component!!");
  }
  componentDidUpdate(){
    console.log("component is update!!");
  }
  componentWillUnmount(){
    console.log("bye bye component!!");
  }
  render(){
    return (
    <div>
      <h1>
        the number is : {this.state.count}
      </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  };
}

export default App;
