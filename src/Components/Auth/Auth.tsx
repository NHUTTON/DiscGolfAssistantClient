import React from 'react';
import {Box, Typography} from '@material-ui/core'

import Login from './Login';
import Register from './Register'
import Courses from '../Courses/Courses'
import {IData} from "../Interfaces"

type Props = {
    updateToken: (newToken: IData) => void,
    sessionToken: string
    clearToken: () => void
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

    exitModal = () => {
        this.setState({
            registerModal: false,
            loginModal: false
        })
    }

    render() {
        return(
            <div>
                <div className="headerCont">
                <img src="https://i.imgur.com/0jje6Qx.png" alt="no image" width={70} height={70} />
                <br/>
                <Typography style={{fontFamily: "rocksalt", color: "#ee2e31", fontSize:"1.5em", whiteSpace: "nowrap", paddingTop: "1.4em"}}>Disc Golf Assistant</Typography>
                    <Box  style={{marginLeft: "900px", marginTop:"20px"}}>  
                        <button className="authButtons" onClick={this.loginModalHandle}>Login</button>
                        <br/>
                        <button className="authButtons" onClick={this.registerModalHandle}>Register</button>
                    </Box>
                </div>
                <div >
                {this.state.loginModal ? <Login clearToken={this.props.clearToken}updateToken={this.props.updateToken} exitModal={this.exitModal} loginModal={this.state.loginModal}/> : null} {this.state.registerModal ? <Register updateToken={this.props.updateToken} exitModal={this.exitModal} registerModal={this.state.registerModal} /> : null}
                </div>
                <Courses sessionToken={this.props.sessionToken} />
            </div>
        )
    }
} 

export default Auth;