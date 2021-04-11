import { Dialog, Box } from '@material-ui/core';
import React, {Component} from 'react';
import APIURL from '../../helpers/environment'

type Props = {
    results: any
    sessionToken: string
    fetchResults: any
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

class CourseEdit extends Component <Props, State> {
    constructor (props: Props) {
        super(props)
        this.state ={
            image: this.props.results.image,
            name:  this.props.results.name, 
            city:  this.props.results.city, 
            state:  this.props.results.state, 
            holes:  this.props.results.holes, 
            distance:  this.props.results.distance, 
            tee:  this.props.results.tee,
            modal: false
        }
    };

    courseUpdate=(e: any) => {
        e.preventDefault()
        fetch(`${APIURL}/course/update/${this.props.results.id}`, {
            method: 'PUT',
            body: JSON.stringify({course: {
                image: this.state.image,
                name:  this.state.name, 
                city:  this.state.city, 
                state:  this.state.state, 
                holes:  this.state.holes, 
                distance:  this.state.distance, 
                tee:  this.state.tee,
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => {
            console.log(res);
            this.exitEditModal()
            this.props.fetchResults()
        })
    } 

    courseDelete = () => {
        fetch(`${APIURL}/course/delete/${this.props.results.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.sessionToken
        })
    })
    .then(() => this.props.fetchResults())
}

componentDidUpdate(prevState: any ) {
 if (prevState.results.name !== this.props.results.name){
     this.setState({
        image: this.props.results.image,
        name:  this.props.results.name, 
        city:  this.props.results.city, 
        state:  this.props.results.state, 
        holes:  this.props.results.holes, 
        distance:  this.props.results.distance, 
        tee:  this.props.results.tee,
     })
 }
}

    handleInput = (e:any) => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        })
      };

      courseEditHandle = () => {
        this.setState({
            modal: true
        })
    }

    exitEditModal = () => {
        this.setState({
            modal: false,
        })
    }

    render() {
        return(
            <div>
                <div>
                  <Dialog open={this.state.modal}>
                    <div  id="courseDialog">
                      <h2>Edit Course Information:</h2>
                      <form>
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
                        <button onClick={this.courseUpdate}>Submit</button>
                        </Box>
                        <Box ml={1} p={1}>
                        <button onClick={this.exitEditModal}>Close</button>
                        </Box>
                      </Box>
                    </div> 
                  </Dialog>
                </div>
                <button id="edit" onClick={this.courseEditHandle}>Edit</button>
                <button id="delete" onClick={this.courseDelete}>Delete Course</button>
            </div>
        )
    }
}

export default CourseEdit;