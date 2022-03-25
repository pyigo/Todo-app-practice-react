import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "react-router-dom";
import withNavigation from "./WithNavigation";



class Todoapp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        return (
            <div className="TodoApp">
                <Router>
                <Routes>
                    <Route path="/" element = {<LoginComponentWithNavigation/>} />
                    <Route path="/login" element ={<LoginComponentWithNavigation/>} />
                    <Route path="/Welcome" element ={<WelcomeComponent/>} />
                    <Route element= {<ErrorComponent/>}/>
                    <Route path ="*" element ={<ErrorComponent/>} />
                </Routes>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent/> */}
            </div>
        );
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>Welcome in28minutes</div>
        )
    }
}

function ErrorComponent(){
    return <div>Error Occurred</div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "in28minutes",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false

        };
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        // console.log(this.state);
        this.setState({
           [event.target.name]
            :event.target.value,
        });
    }

    // handleUsernameChange(event){
    //    console.log(event.target.value);
    //    this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //    this.setState({password:event.target.value})
    // }

    loginClicked(){
        // in28minutes, dummy
        if (this.state.username==='in28minutes' && this.state.password==='dummy'){
            // this.props.history.push("/welcome")
            this.props.navigate(`/welcome`)
            // this.setState({showSuccessMessage: true})
            // this.setState({hasLoginFailed:false})
        }  
       else {
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
       }
        
        // console.log(this.state)
    }

    // we made our user name form a controlled form which means the chnage of the UI is dictated by the state. When the state chnages the UI chnages too.
    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                user Name:{" "}
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                password:{" "}
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}



// create a functiomnal component with property called hasloginfailed
// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed){
//         return <div>Invalid Credentilas</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if (props.showSuccessMessage){
//         return  <div>Login Successful</div>
//     }
//     return null
// }
export default Todoapp;
