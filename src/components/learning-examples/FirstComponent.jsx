import React, { Component } from "react";
//  Why do we put Component inside curly braces when importing? Because React is the bdefault element and we can import without using the braces, evry other element that we import 
// from the same module should have be inside braces 

// create class comoponent 
class FirstComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
          first component
        </div>
      )
    }
  }


  
  export default FirstComponent;