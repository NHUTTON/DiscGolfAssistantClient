import React, {Component} from 'react';
import { Dialog, Box, Grid } from '@material-ui/core';

import APIURL from '../../helpers/environment'
import {IData} from "../Interfaces"

type Props = {
updateToken: (newToken: IData) => void,
exitModal: () => void
loginModal: boolean
clearToken: () => void
}

type State = {
    username: string,
    password: string,
    modal: boolean
}

export default class Login extends Component<Props, State> {
    constructor (props: Props) {
        super(props)
        this.state ={
            username: '',
            password: '',
            modal: props.loginModal
        }
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (this.state.password ==="" || this.state.username.length < 5) {
          alert("Incorrect username or password")
          window.location.reload(true)
        } else {
          fetch(`${APIURL}/user/login`, {
              method: "POST",
              body: JSON.stringify({user: {
                    username: this.state.username, 
                    password: this.state.password
                  }}),
              headers: new Headers({
                  'Content-Type': 'application/json'
              })
          }).then(res => res.json()
          ).then(data => {
              console.log(data)
              this.props.updateToken(data)
              alert(`Welcome back, ${data.user.firstname}!`)
          })
          this.setState({modal:false})
        }
      }
    

    handleOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        })
      };
      
    render() {
        return(
            <div>
                <div >
                <div >
                  <Dialog open={this.state.modal}>
                    <div id="dialogStyleAuth">
                      <h2>Login</h2>
                      <form onSubmit={this.handleSubmit}>
                        <Box>
                        <label>Username:</label>
                        <input name="username" type="text" onChange={this.handleOpen} value={this.state.username}></input>
                        </Box>
                        <Box>
                        <label>Password: </label>
                        <input name="password" type="password" onChange={this.handleOpen} value={this.state.password}></input>
                        </Box>
                        <Box display="flex" mt={2} ml={6}>
                          <Box ml={1} p={1}>
                        <button className="authButtons" onClick={this.handleSubmit}>Submit</button>
                        </Box>
                        <Box ml={1} p={1}>
                        <button className="authButtons" onClick={this.props.exitModal}>Close</button>
                        </Box>
                        </Box>
                      </form>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
        )
    }
} 