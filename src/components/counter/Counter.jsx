import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  // define the initial state in a constructor
  // state=>counter 0

  constructor() {
    // always call the super method after construvctor to use the sate or you get an error
    super();
    this.state = {
      counter: 0,
    
    };
    // Using an arrow function prevents us from using the binding method
    this.increment = this.increment.bind(this);
  }

  render () {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
       
      </div>
    );
  }

  increment () {
    //Update state - counter ++
    // console.log('increment');
    // we cannot update the state of a component directly, we will use setSate() method and pass the objevct counter with the updatded value as an argument
    // this.state.counter++;
    this.setState ({
        // this.setState does a merge of the current state and what we want to update
        counter: this.state.counter +1
    })
  }
}

export default Counter;
