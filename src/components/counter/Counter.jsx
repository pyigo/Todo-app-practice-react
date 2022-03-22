import React, { Component } from "react";
import propTypes from "prop-types";
import "./counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      // our state here represent the total of count in the parent component
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment}/>
        <CounterButton by={5} incrementMethod={this.increment}/>
        <CounterButton by={10} incrementMethod={this.increment}/>
        {/* the next line is the whole counter value */}
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(by) {
    // console.log(`we are incrementing from child in parent : ${by} `)
     this.setState({
       counter: this.state.counter + by
     });
  }
}

class CounterButton extends Component {
  // define the initial state in a constructor
  // state=>counter 0

  constructor() {
    // always call the super method after construvctor to use the sate or you get an error
    super();
    this.state = {
      // this state represent the sate at the specific counter
      counter: 0,
    };
    // Using an arrow function prevents us from using the binding method
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment() {
    //Update state - counter ++
    // console.log('increment');
    // we cannot update the state of a component directly, we will use setSate() method and pass the objevct counter with the updatded value as an argument
    // this.state.counter++; BAD PRACTICE
    this.setState({
      // this.setState does a merge of the current state and what we want to update
      // use this. props to increment the value of the object
      counter: this.state.counter + this.props.by,
    });
    this.props.incrementMethod(this.props.by); //the parameter by is to say the value of the increment
  }
}

// creating a default prop to increment by a default value
CounterButton.defaultProps = {
  by: 1,
};

// creating a check the type of the props value being passed
CounterButton.propTypes = {
  by: propTypes.number,
};
export default Counter;
