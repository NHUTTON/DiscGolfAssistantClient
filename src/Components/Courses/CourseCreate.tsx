import React, {useState, Component} from 'react';
import { Dialog, Box, Button } from '@material-ui/core';
import APIURL from '../../helpers/environment'

type Props = {
    updateToken: any,
    exitModal: any,
    courseCreateModal: any
    sessionToken: string
}

type State = {
    image: string,
    name: string, 
    city: string, 
    state: string, 
    holes: string, 
    distance: number, 
    tee: string,
    modal: boolean
}

class CourseCreate extends Component <Props, State> {
    constructor (props: Props) {
        super(props)
        this.state ={
            image: "",
            name: "", 
            city: "", 
            state: "", 
            holes: "", 
            distance: 0, 
            tee: "",
            modal: props.courseCreateModal
        }
    };

    handleSubmit = (e: any) => {
        e.preventDefault();

        fetch(`${APIURL}/course/create`, {
                method: 'POST',
                body: JSON.stringify({course: {
                    image: this.state.image,
                    name: this.state.name, 
                    city: this.state.city, 
                    state: this.state.state, 
                    holes: this.state.holes, 
                    distance: this.state.distance, 
                    tee: this.state.tee,
                }}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
                })
            }) .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({modal:false});
            })
        }

        handleInput = (e:any) => {
            this.setState({
              ...this.state,
              [e.target.name]: e.target.value
            })
          };

render() {
    return (
            <div>
                <div>
                  <Dialog open={this.state.modal}>
                    <div  id="courseDialog">
                      <h2>Add a course to the Database</h2>
                      <form onSubmit={this.handleSubmit}>
                          <Box>
                        <label>Name: </label>
                        <input name="name" type="text" onChange={this.handleInput} value={this.state.name}></input>
                        </Box>
                        <Box>
                        <label>City: </label>
                        <input name="city" type="text" onChange={this.handleInput} value={this.state.city}></input>
                        </Box>
                        <Box>
                        <label>State: </label>
                        <input name="state" type="text" onChange={this.handleInput} value={this.state.state}></input>
                        </Box>
                        <Box>
                        <label>Holes: </label>
                        <input name="holes" type="text" onChange={this.handleInput} value={this.state.holes}></input>
                        </Box>
                        <Box>
                        <label>Distance: </label>
                        <input name="distance" type="text" onChange={this.handleInput} value={this.state.distance}></input>
                        </Box>
                        <Box>
                        <label>Tees: </label>
                        <input name="tee" type="text" onChange={this.handleInput} value={this.state.tee}></input>
                        </Box>
                        <Box>
                        <label>Image URL: </label>
                        <input name="image" type="text" onChange={this.handleInput} value={this.state.image}></input>
                        </Box>
                      </form>
                      <Box display="flex" mt={2} ml={15}>
                      <Box ml={1} p={1}>
                        <button onClick={this.handleSubmit}>Submit</button>
                        </Box>
                        <Box ml={1} p={1}>
                        <button onClick={this.props.exitModal}>Close</button>
                        </Box>
                        </Box>
                    </div> 
                  </Dialog>
                </div>
            </div>
        )
    }
}

export default CourseCreate; 