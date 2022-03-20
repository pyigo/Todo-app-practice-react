import logo from './logo.svg';
import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

import './App.css';
import Counter from './components/counter/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent> */}
        <Counter />
      </div>
    );
  }
}



export default App;
