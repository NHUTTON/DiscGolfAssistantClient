import React, {Component, useState} from 'react';
import Modal from '@material-ui/core/Modal';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


type Props = {
  updateToken: any,
  exitModal: any,
  registerModal: boolean
}

type State = {
    firstname: string, 
    lastname: string,
    username: string,
    password: string,
    modal: boolean
}

export default class Register extends Component<Props, State> {

  constructor (props: Props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      modal: props.registerModal
    }
  };

  regEx = new RegExp (/[a-z]{1,10}[0-9]{1,10}/i)


  handleSubmit = (event: any) => {
    event.preventDefault();
    
    if (this.state.password.length < 5) {
      alert("Username must be longer than 4 characters")
    } else if (this.state.username.length < 5) {
      alert("Username must be longer than 4 characters")
    } else if (this.regEx.test(this.state.username)) {

      fetch('http://localhost:4000/user/register', {
          method: "POST",
          body: JSON.stringify({user: {
                firstname: this.state.firstname, 
                lastname: this.state.lastname, 
                username: this.state.username, 
                password: this.state.password
              }}),
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      }).then(res => res.json()
      ).then(data => {
          console.log(data)
          this.props.updateToken(data.sessionToken)
      })
      this.setState({modal:false});
  } else {
    alert('Username must contain at least one number')
  }
}

    handleOpen = (e:any) => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
    };
  
    render() {
        return(
            <div>
                <div>
                  <Modal open={this.state.modal}>
                    <div>
                      <h2>Register</h2>
                      <form onSubmit={this.handleSubmit}>
                        <label>Username:</label>
                        <input name="username" type="text" onChange={this.handleOpen} value={this.state.username}></input>
                        <label>Password</label>
                        <input name="password" type="password" onChange={this.handleOpen} value={this.state.password}></input>
                        <label>First Name</label>
                        <input name="firstname" type="text" onChange={this.handleOpen} value={this.state.firstname}></input>
                        <label>Last Name</label>
                        <input name="lastname" type="text" onChange={this.handleOpen} value={this.state.lastname}></input>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.props.exitModal}>Close</button>
                      </form>
                    </div>
                  </Modal>
                </div>
              </div>
        )
    }
} 