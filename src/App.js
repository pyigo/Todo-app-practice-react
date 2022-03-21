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

        {/* Set one as the default value of counter number one by defining a default props. */}
        <Counter by={1} />

        {/* we will be reusing our counter component and include them in the parent icomponent which is App 
        and each counter component will have a diif increment value and update the variable of the component as we click on the button.  */}
        {/* Because the increment vale will not change, we can use props   */}
        <Counter by={5} />
        <Counter by={10} />

      </div>
    );
  }
}



export default App;
