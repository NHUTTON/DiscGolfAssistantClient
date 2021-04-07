import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';

type Props = {
updateToken: any,
exitModal: any,
loginModal: boolean
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

    handleSubmit = (event: any) => {
        event.preventDefault();
          fetch('http://localhost:4000/user/login', {
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
              this.props.updateToken(data.sessionToken)
          })
          this.setState({modal:false}) 
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
                <div>
                  <Modal open={this.state.modal}>
                    <div>
                      <h2>Register</h2>
                      <form onSubmit={this.handleSubmit}>
                        <label>Username:</label>
                        <input name="username" type="text" onChange={this.handleOpen} value={this.state.username}></input>
                        <label>Password</label>
                        <input name="password" type="password" onChange={this.handleOpen} value={this.state.password}></input>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.props.exitModal}>Close</button>
                      </form>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
        )
    }
} 