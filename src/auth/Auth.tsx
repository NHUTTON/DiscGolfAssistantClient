import React from 'react';
import Radium from 'radium'
import Login from './Login';
import Register from './Register'

type Props = {
    updateToken: any
}

type AuthState = {
    registerModal: boolean,
    loginModal: boolean
}

class Auth extends React.Component<Props, AuthState> {
    constructor (props: any) {
        super(props)
        this.state = {
            registerModal: false,
            loginModal: false
        }
    };

    registerModalHandle = () => {
        this.setState({
            registerModal: true
        })
    }

    loginModalHandle = () => {
        this.setState({
            loginModal: true
        })
    }

    exitModal = (e: any) => {
        this.setState({
            registerModal: false,
            loginModal: false
        })
    }


    render() {
        return(
            <div>
                <div>
                <button onClick={this.loginModalHandle}>Login</button>
                <button onClick={this.registerModalHandle}>Register</button>
                </div>
                {this.state.loginModal ? <Login updateToken={this.props.updateToken} exitModal={this.exitModal} loginModal={this.state.loginModal}/> : null} {this.state.registerModal ? <Register updateToken={this.props.updateToken} exitModal={this.exitModal} registerModal={this.state.registerModal} /> : null}
            </div>
        )
    }
} 

export default Radium(Auth);