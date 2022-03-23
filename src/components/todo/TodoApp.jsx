import React, { Component } from 'react';

class Todoapp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <LoginComponent/>
            </div>
        );
    }
}


class LoginComponent extends Component {
constructor(props){
    super(props)
     
    this.state={
        username: 'in28minutes',
        password:''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
}

handleUsernameChange(event){
   console.log(event.target.value);
   this.setState({username:event.target.value})
}

handlePasswordChange(event){
    console.log(event.target.value);
   this.setState({password:event.target.value})
}
// we made our user name form a controlled form which means the chnage of the UI is dictated by the state. When the state chnages the UI chnages too.
    render(){
        return(
            <div>
                user Name: <input type="text" name="username" value ={this.state.username} onChange={this.handleUsernameChange}/>
                password: <input type="password" name="password"  value ={this.state.password} onChange={this.handlePasswordChange}/>
                <button>Login</button>
            </div>
        )
    }
}

export default Todoapp;
